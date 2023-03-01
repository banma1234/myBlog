const { connectToDatabase, GridFSBucket } = require("util/mongodb");

export default async function getImage(fileName: string) {
  try {
    let { db } = await connectToDatabase();
    const bucket = new GridFSBucket(db);
    const downloadStream = bucket.openDownloadStreamByName(fileName);

    return downloadStream;
  } catch (error: any) {
    console.log(error);
  }
}
