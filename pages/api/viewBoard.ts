const { connectToDatabase } = require("util/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function boardHandler(req: any, res: any) {
  let viewType = req.headers.viewtype;

  if (viewType == "VIEW_TOTAL") {
    return viewAll(req, res);
  } else if (viewType == "VIEW_SERIES") {
    return viewSeries(req, res);
  }
}

async function viewAll(req: any, res: any) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let posts = await db
      .collection("posts")
      .find({}, { title: 1 })
      .sort({ uploadDate: -1 })
      .limit(4)
      .toArray();
    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
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

async function viewSeries(req: any, res: any) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let posts = await db
      .collection("posts")
      .find({}, { series: 1, uploadDate: 1 })
      .sort({ uploadDate: -1 })
      .toArray();
    // .collection("posts").aggregate([
    //   {
    //     $sort: { uploadDate: -1 }
    //   },
    //   {
    //     $group: {
    //       _id: "$series",
    //       items: { $push: "$$ROOT" },
    //       count: { $sum: 1 }
    //     }
    //   },
    //   {
    //     $match: { count: { $gt: 1 } }
    //   }
    // ]).toArray().then((docs: any) => {
    //   console.log(JSON.stringify(docs.pretty));
    //   var procs = [];
    //   for (var doc of docs) {
    //     doc.targets.shift();
    //     procs[procs.length] = db.collection("posts").deleteMany({
    //       _id: { $in: doc.targets }
    //     });
    //   }
    // })
    // return the posts
    return res.json({
      message: JSON.parse(JSON.stringify(posts)),
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
