import { connectToDatabase } from "util/mongodb";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NextApiRequest, NextApiResponse } from "next";
import authMiddleware from "util/auth/authMiddleware";

export default authMiddleware(authHandler);

async function authHandler(req: NextApiRequest, res: NextApiResponse) {
  const user = req.session.get("user");
  if (user) {
    return addThumbnail(req, res);
  } else {
    return res.status(401).json({
      message: "access denied",
      success: false,
    });
  }
}

async function addThumbnail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { series, images, imageTitle } = req.body;
    let { db } = await connectToDatabase();
    const client = new S3Client({
      region: "kr-standard",
      endpoint: process.env.AWS_HOSTNAME,
    });
    const imageContainer = [];

    const base64Data = images[0].split(",")[1];
    const imageBuffer = Buffer.from(base64Data, "base64");
    const contentType = imageTitle[0].split(".").pop();

    const params = {
      Bucket: "choco-image",
      Key: `thumbnail/${imageTitle[0]}`,
      Body: imageBuffer,
      ACL: "public-read",
      ContentEncoding: "base64",
      ContentType: `image/${contentType}`,
    };

    const putImagesCommand = new PutObjectCommand(params);
    try {
      const response = await client.send(putImagesCommand);
      console.log(response);
    } catch (e: any) {
      console.log(e);
    }
    imageContainer.push({
      data: imageBuffer,
      contentType: imageTitle[0].split(".").pop(),
    });

    await db.collection("thumbnail").insertOne({
      series,
      imageTitle: imageTitle[0],
      images: imageContainer[0],
    });

    return res.json({
      message: "Thumbnail added successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to add thumbnail",
      success: false,
    });
  }
}
