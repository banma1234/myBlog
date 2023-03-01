const { connectToDatabase } = require("util/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function postHandler(req: any, res: any) {
  switch (req.method) {
    case "GET": {
      return getPosts(req, res);
    }
    case "POST": {
      return addPost(req, res);
    }
    default: {
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
}

async function addPost(req: any, res: any) {
  try {
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
    return res.json({
      message: "Post added successfully",
      success: true,
    });
  } catch (error: any) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}

async function getPosts(req: any, res: any) {
  try {
    let postName = decodeURI(req.headers.postname);
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let posts = await db
      .collection("posts")
      .find({ title: postName })
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
