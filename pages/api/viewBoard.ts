const { connectToDatabase } = require("util/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function boardHandler(req: any, res: any) {
  let viewType = req.headers.viewtype;

  if (viewType == "VIEW_TOTAL") {
    return viewAll(req, res);
  } else if (viewType == "VIEW_SERIES") {
    return viewSeries(req, res);
  } else if (viewType == "VIEW_INDEX") {
    return viewIndexBoard(req, res);
  } else {
    return viewSeriesDetail(req, res);
  }
}

async function viewIndexBoard(req: any, res: any) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    const options = {
      sort: { uploadDate: -1 },
      projection: { _id: 0, title: 1, uploadDate: 1, thumbnail: 1 },
    };
    // fetch the posts
    let posts = await db
      .collection("posts")
      .find({}, options)
      .limit(4)
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

async function viewAll(req: any, res: any) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    const options = {
      sort: { uploadDate: -1 },
      projection: { _id: 0, title: 1, uploadDate: 1, thumbnail: 1 },
    };
    // fetch the posts
    let posts = await db
    .collection("posts")
    .find({}, options)
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

async function viewSeries(req: any, res: any) {
  try {
    // connect to the database
    let { db } = await connectToDatabase();
    const options = {
      sort: { uploadDate: -1 },
      projection: { _id: 0, series: 1 },
    };
    // fetch the posts
    let result: any = [];
    await db
      .collection("posts")
      .aggregate([
        {
          $group: {
            _id: "$series",
            unique_id: { $addToSet: "$series" },
            count: { $sum: 1 },
          },
        },
        {
          $match: {
            count: { $gte: 1 },
          },
        },
      ])
      .sort({ _id: -1 })
      .toArray()
      .then((docs: any) => {
        docs.forEach((item: any) => {
          result.push({
            series: item["_id"],
            count: item["count"],
          });
        });
      });

    // return the posts
    return res.json({
      message: result,
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

async function viewSeriesDetail(req: any, res: any) {
  try {
    let selectedSeries = decodeURI(req.headers.viewtype);
    const options = {
      sort: { uploadDate: -1 },
      projection: { _id: 0, series: 1, title: 1, uploadDate: 1, thumbnail: 1 },
    };
    // connect to the database
    let { db } = await connectToDatabase();
    // fetch the posts
    let posts = await db
      .collection("posts")
      .find({ series: selectedSeries }, options)
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