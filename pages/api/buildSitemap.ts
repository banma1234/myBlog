const { connectToDatabase } = require("util/mongodb");

export default async function buildSitemap(req: any, res: any) {
  try {
    let { db } = await connectToDatabase();
    const options = {
      projection: {
        _id: 0,
        title: 1,
      },
    };

    let posts = await db.collection("posts").find({}, options).toArray();

    return res.json({
      message: posts,
      success: true,
    });
  } catch (error: any) {
    return res.json({
      message: new Error(error).message,
      success: false,
    });
  }
}
