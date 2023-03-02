import { connectToDatabase } from "util/mongodb";

export default async function imgToUrl(req: any, res: any) {
  let postName = decodeURI(req.headers.postname);

  try {
    const { db } = await connectToDatabase();
    const options = {
        projection: {
            title: 1,
            images: 1,
        }
    }
    const result = await db.collection("posts").findOne({ title: postName }, options);
    const images = result.images;

    const urls = [];
    for (let item of images) {
      const buffer = Buffer.from(item.data.buffer);
      const blob = new Blob([buffer], { type: item.contentType });
      const url = URL.createObjectURL(blob);
      urls.push(url);
    }

    return res.json({
        urls,
        message: "parsing images to Url are success",
        succss: true
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ 
        message: "Internal Server Error",
        success: false
    });
  }
}


    //   const dataURI = `data:${item.contentType};base64,${buffer.toString(
    //     "base64",
    //   )}`;