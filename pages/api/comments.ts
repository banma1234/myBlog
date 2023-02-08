const { connectToDatabase } = require("util/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function commentHandler(req: any, res: any) {
  switch (req.method) {
    case "GET": {
      return getComments(req, res);
    }
    // case "POST": {
    //   return addPost(req, res);
    // }
    // case 'PUT': {
    //     return updatePost(req, res);
    // }
    // case 'DELETE': {
    //     return deletePost(req, res);
    // }
  }
}

async function getComments(req: any, res: any) {
  try {
    let title = decodeURI(req.headers.postname);
    console.log(title)
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the comments
    let comments = await db
      .collection("comments")
      .find({ postName: title })
      .toArray();
    // return the comments
    return res.json({
      message: comments,
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
