import { connectToDatabase } from "util/mongodb";
import { Blob } from "buffer";

export default async function imgToUrl(req: any, res: any) {
  try {
    const { db } = await connectToDatabase();
    const imageTitle = req.query.title;

    console.log("imageTitle : ", imageTitle);

    const result = await db
      .collection("images")
      .findOne({ imageTitle: imageTitle });
    const images = result.images;

    const base64Image = Buffer.from(images.data.buffer).toString("base64");

    const buffer = Buffer.from(images.data.buffer);
    const blob: any = new Blob([buffer], { type: images.contentType });
    const url = URL.createObjectURL(blob);

    console.log("url : ", url);

    res.writeHead(200, {
      "Content-Type": images.contentType,
      "Content-Length": base64Image.length,
    });

    res.end(Buffer.from(base64Image, "base64"));
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: `Internal Server Error : ${error}`,
      success: false,
    });
  }
}
