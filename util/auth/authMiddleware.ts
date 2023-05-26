import { NextApiHandler } from "next";
import { withIronSession } from "next-iron-session";

const authMiddleware = (handler: NextApiHandler) => {
  return withIronSession(handler, {
    password: process.env.SESSION_SECRET as string,
    cookieName: "session",
    cookieOptions: {
      secure: process.env.ENVIRONMENT === "production",
      httpOnly: process.env.ENVIRONMENT === "production",
      maxAge: 60 * 60 * 24 * 7,
    },
  });
};

export default authMiddleware;
