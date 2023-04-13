import { connectToDatabase } from "util/mongodb";

export default async function postHandler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return getPosts(req, res);
    case "POST":
      return addPost(req, res);
  }
}

async function addPost(req: any, res: any) {
  try {
    const {
      title,
      content,
      series,
      hashtag,
      images,
      uploadDate,
      imageTitle,
      isThumbnail,
    } = req.body;

    let { db } = await connectToDatabase();
    const imageContainer = [];

    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        const base64Data = images[i].split(",")[1];
        const imageBuffer = Buffer.from(base64Data, "base64");
        imageContainer.push({
          data: imageBuffer,
          contentType: imageTitle[i].split(".").pop(), // Replace this with the actual content type of the image
        });
      }
    }

    for (let i = 0; i < imageTitle.length; i++) {
      await db.collection("images").insertOne({
        title,
        imageTitle: imageTitle[i],
        images: imageContainer[i],
      });
    }

    await db.collection("posts").insertOne({
      title,
      content,
      series,
      hashtag,
      thumbnail: isThumbnail ? imageContainer[0] : null,
      imageTitle: imageTitle,
      isThumbnail,
      uploadDate,
    });

    return res.json({
      message: "Post added successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Failed to add post",
      success: false,
    });
  }
}

async function getPosts(req: any, res: any) {
  try {
    let postName = decodeURI(req.headers.postname);
    // connect to the database
    let { db } = await connectToDatabase();
    const options = {
      projection: {
        images: 0,
        thumbnails: 0,
        isThumbnail: 0,
        series: 0,
      },
    };
    // fetch the posts
    let posts = await db
      .collection("posts")
      .find({ title: postName }, options)
      .toArray();
    // return the posts
    return res.json({
      message: posts,
      success: true,
    });
  } catch (error: any) {
    // return the error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
