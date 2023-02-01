const { connectToDatabase } = require("util/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function postHandler(req: any, res: any) {
  switch (req.method) {
    // case 'GET': {
    //     return getPosts(req, res);
    // }
    case "POST": {
      return addPost(req, res);
    }
    // case 'PUT': {
    //     return updatePost(req, res);
    // }
    // case 'DELETE': {
    //     return deletePost(req, res);
    // }
  }
}

async function addPost(req: any, res: any) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the post
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
