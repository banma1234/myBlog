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
    case "DELETE": {
      return deleteComment(req, res);
    }
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
        break;
      }
      case "REPLY": {
        let lastComment = await db
          .collection("comments")
          .find({
            REF: newBody.REF,
            RE_LEVEL: newBody.RE_LEVEL,
          })
          .sort({ RE_STEP: -1 })
          .limit(1)
          .toArray();

        let targetStep = 0;
        if (lastComment && lastComment.length > 0) {
          targetStep = lastComment[0].RE_STEP + 1;
          newBody.RE_STEP = targetStep;
        } else {
          targetStep = newBody.RE_STEP;
        }

        await db.collection("comments").updateMany(
          {
            REF: newBody.REF,
            RE_STEP: {
              $gte: targetStep,
            },
          },
          {
            $inc: { RE_STEP: 1 },
          },
        );

        await db.collection("comments").insertOne(newBody);
        break;
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

async function deleteComment(req: any, res: any) {
  try {
    let { db } = await connectToDatabase();
    let newBody = JSON.parse(req.body);
    const option = {
      projection: {
        _id: 1,
        password: 1,
        RE_STEP: 1,
      },
    };

    let targetComment = await db
      .collection("comments")
      .find(
        {
          _id: new ObjectId(newBody._id),
          password: newBody.password,
        },
        option,
      )
      .toArray();

    if (targetComment && targetComment.length > 0) {
      await db.collection("comments").updateMany(
        {
          REF: newBody.REF,
          RE_STEP: {
            $gte: targetComment[0].RE_STEP,
          },
        },
        {
          $inc: { RE_STEP: -1 },
        },
      );
      await db.collection("comments").deleteOne({ _id: targetComment[0]._id });

      return res.json({
        message: "Comment deleted successfully",
        success: true,
      });
    } else {
      return res.json({
        message: "invalid password issue",
        success: false,
      });
    }
  } catch (error: any) {
    // return an error
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
