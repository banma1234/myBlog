import { connectToDatabase } from "util/mongodb";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
// import { connectToS3 } from 'util/accessS3';

export default async function postHandler(req: any, res: any) {
  switch (req.method) {
    case "GET":
      return getPosts(req, res);
    case "POST":
      return addPost(req, res);
  }
}

async function addPost(req: any, res: any) {
  try {
    const {
      title,
      content,
      series,
      hashtag,
      images,
      uploadDate,
      imageTitle,
      isThumbnail,
    } = req.body;

    let { db } = await connectToDatabase();
    const client = new S3Client({
      region: "kr-standard",
      endpoint: process.env.AWS_HOSTNAME,
    });
    let inherentThumbnail = null;

    if (images && images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        const base64Data = images[i].split(",")[1];
        const imageBuffer = Buffer.from(base64Data, "base64");
        const contentType = imageTitle[i].split(".").pop();

        const params = {
          Bucket: "choco-image",
          Key: `images/${imageTitle[i]}`,
          Body: imageBuffer,
          ACL: "public-read",
          ContentEncoding: "base64",
          ContentType: `image/${contentType}`,
        };
        if (isThumbnail && i === 1) {
          inherentThumbnail = `${process.env.NAVER_CDN_URL}/images/${imageTitle[i]}`;
        }

        const putImagesCommand = new PutObjectCommand(params);
        try {
          const response = await client.send(putImagesCommand);
          console.log(response);
        } catch (e: any) {
          console.log(e);
        }
      }
    }

    let seriesThumbnail = null;
    try {
      const option = { projection: { _id: 0, images: 0 } };
      seriesThumbnail = await db
        .collection("thumbnail")
        .findOne({ series: series }, option);

      seriesThumbnail = `${process.env.NAVER_CDN_URL}/thumbnail/${seriesThumbnail.imageTitle}`;
    } catch {
      seriesThumbnail = null;
    }

    await db.collection("posts").insertOne({
      title,
      content,
      series,
      hashtag,
      thumbnail: isThumbnail ? inherentThumbnail : seriesThumbnail,
      imageTitle: imageTitle,
      isThumbnail,
      uploadDate,
    });

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
      projection: {
        images: 0,
        thumbnail: 0,
        isThumbnail: 0,
      },
    };
    const options2 = {
      sort: { uploadDate: -1 },
      projection: {
        _id: 0,
        title: 1,
        uploadDate: 1,
        thumbnail: 1,
        isThumbnail: 1,
        series: 1,
      },
    };

    // fetch the posts
    let posts = await db
      .collection("posts")
      .find({ title: postName }, options)
      .toArray();

    let recentPosts = null;
    try {
      recentPosts = await db
        .collection("posts")
        .find({ series: posts[0].series, title: { $ne: postName } }, options2)
        .limit(3)
        .toArray();
    } catch (error: any) {
      console.log(error);
      return res.json({
        message: posts,
        success: true,
      });
    }

    return res.json({
      message: posts,
      recent: recentPosts,
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
