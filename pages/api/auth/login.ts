import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "util/mongodb";
import { withIronSession, Session } from "next-iron-session";
import bcrypt from "bcrypt";

declare module "next" {
  interface NextApiRequest {
    session: Session;
  }
}

const sessionConfig = {
  password: process.env.SESSION_SECRET as string,
  cookieName: "session",
  cookieOptions: {
    secure: process.env.ENVIRONMENT === "production",
    httpOnly: process.env.ENVIRONMENT === "production",
    maxAge: 60 * 60 * 24 * 7,
  },
};

async function loginHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body;
    let { db } = await connectToDatabase();

    const requestUser = await db.collection("user").findOne({ email: email });

    if (requestUser) {
      const isPasswordMatched = await bcrypt.compare(
        password,
        requestUser.password,
      );
      if (isPasswordMatched) {
        req.session.set("user", {
          id: requestUser.userName,
          userType: requestUser.userType,
        });
        await req.session.save();

        return res.json({
          success: false,
          message: "success",
        });
      } else {
        return res.json({
          success: false,
          message: "password did not matched",
        });
      }
    } else {
      return res.json({
        success: false,
        message: "user not exist",
      });
    }
  } catch (e: any) {
    console.log(e);
  }
}

export default withIronSession(
  async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
      await loginHandler(req, res);
    } else {
      return res.json({
        success: false,
        message: "404 not Found",
      });
    }
  },
  sessionConfig,
);
