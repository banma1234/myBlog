import { connectToDatabase } from "util/mongodb";
import sharp from "sharp";

export default async function postHandler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return getPosts(req, res);
<<<<<<< HEAD
    }
    case "POST": {
      return addPost(req, res);
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
=======
    case "POST":
      return addPost(req, res);
>>>>>>> main
  }
}

async function addPost(req: any, res: any) {
  try {
<<<<<<< HEAD
    let { db } = await connectToDatabase();

    const post = {
      title: req.body.title,
      content: req.body.content,
      series: req.body.series,
      uploadDate: req.body.uploadDate,
      images: [],
    };

    if (req.files) {
      const images = Array.isArray(req.files.images) ? req.files.images : [req.files.images];
      const objectIds = await Promise.all(
        images.map((image: any) => {
          const stream = db.gridFSBucket.openUploadStream(image.name);
          const gridFSObjectId = stream.id;
          stream.end(image.data);
          return new Promise((resolve, reject) => {
            stream.on("finish", () => resolve(gridFSObjectId));
            stream.on("error", reject);
          });
        })
      );
      post.images = objectIds;
    }

    await db.collection("posts").insertOne(JSON.parse(req.body));
    // return a message
=======
    const { title, content, series, images, uploadDate, imageTitle } = req.body;
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
      thumbnail: imageContainer[0],
      imageTitle: imageTitle,
      uploadDate,
    });

>>>>>>> main
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
      projection: { images: 0 },
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
