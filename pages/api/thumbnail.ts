import { connectToDatabase } from "util/mongodb";

export default async function addThumbnail(req: any, res: any) {
  try {
    const { series, images, imageTitle } = req.body;
    let { db } = await connectToDatabase();
    const imageContainer = [];

    const base64Data = images[0].split(",")[1];
    const imageBuffer = Buffer.from(base64Data, "base64");
    imageContainer.push({
      data: imageBuffer,
      contentType: imageTitle[0].split(".").pop(), // Replace this with the actual content type of the image
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
