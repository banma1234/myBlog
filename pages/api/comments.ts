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
      sort: { REF: 1, RE_STEP: 1 },
      projection: {
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
  let commentType = req.headers.commenttype;

  try {
    // connect to the database
    let { db } = await connectToDatabase();

    let newBody = JSON.parse(req.body);

    switch (commentType) {
      case "DEFAULT": {
        await db.collection("comments").insertOne(JSON.parse(req.body));
      }
      case "REPLY": {
        // let parentComment = await db
        //   .collection("comments")
        //   .find({ REF: newBody.REF }, { RE_LEVEL: newBody.RE_LEVEL })
        //   .toArray();

        // console.log("parent : ", parentComment);

        // let lastComment = 0;
        // if (parentComment) {
        //   lastComment = parentComment.slice(-1).RE_STEP;
        // } else {
        //   lastComment = 1;
        // }

        // console.log("lastComment : ", lastComment);
        // newBody.RE_STEP = lastComment + 1;
        // console.log("newBody.RE_STEP : ", newBody.RE_STEP);

        let lastComment = await db
          .collection("comments")
          .find({ 
            REF: newBody.REF,
            RE_LEVEL: newBody.RE_LEVEL
           })
          .toArray();

        console.log(lastComment);
        let temp = newBody.RE_STEP;
        if(lastComment) {
          temp = lastComment.RE_STEP + 1;
        }

        await db.collection("comments")
          .updateMany(
            {
              REF: newBody.REF,
              RE_STEP: {
                $gte: temp
              }
            },
            {
              $set: {
                RE_STEP: {
                  $inc: { RE_STEP: 1 }
                 }
              }
            }
          );

        db.collection("comments").insertOne(newBody);
      }
    }
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
