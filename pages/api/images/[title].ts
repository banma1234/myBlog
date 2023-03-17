import { connectToDatabase } from "util/mongodb";

export default async function imgToUrl(req: any, res: any) {
  try {
    const { db } = await connectToDatabase();
    const imageTitle = req.query.title;

    const result = await db
      .collection("images")
      .findOne({ imageTitle: imageTitle });
    const images = result.images;

    const base64Image = images.data.buffer;

    res.writeHead(200, {
      "Content-Type": images.contentType,
      "Content-Length": base64Image.length,
      "Connection": "keep-alive",
    });

    res.end(base64Image);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: `Internal Server Error : ${error}`,
      success: false,
    });
  }
}
