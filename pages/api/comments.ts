const { connectToDatabase } = require("util/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function commentHandler(req: any, res: any) {
  switch (req.method) {
    case "GET": {
      return getComment(req, res);
    }
    case "POST": {
      return addComment(req, res);
    }
    // case 'PUT': {
    //     return updatePost(req, res);
    // }
    // case 'DELETE': {
    //     return deletePost(req, res);
    // }
  }
}

async function getComment(req: any, res: any) {
  try {
    let title = decodeURI(req.headers.postname);
    // connect to the database
    let { db } = await connectToDatabase();
    const options = {
      sort: { REF: 1, RE_STEP: 1, RE_LEVEL: 1 },
      projection: {
        _id: 0,
        REF: 1,
        RE_STEP: 1,
        RE_LEVEL: 1,
        writter: 1,
        content: 1,
        date: 1,
      },
    };
    // fetch the comments
    let comments = await db
      .collection("comments")
      .find({ postName: title }, options)
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

async function addComment(req: any, res: any) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // add the comments
    await db.collection("comments").insertOne(JSON.parse(req.body));
    // return a message
    return res.json({
      message: "Comment added successfully",
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