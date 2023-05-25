const AWS = require("aws-sdk");

const {
  AWS_ACCESS_KEY_ID,
  AWS_HOSTNAME,
  AWS_SECRET_ACCESS_KEY,
  AWS_DEFAULT_REGION,
} = process.env;

export function connectToS3() {
  const S3 = new AWS.S3({
    region: AWS_DEFAULT_REGION,
    endpoint: new AWS.Endpoint(AWS_HOSTNAME),
    credentials: {
      accessKeyId: AWS_ACCESS_KEY_ID,
      secretAccessKey: AWS_SECRET_ACCESS_KEY,
    },
  });

  const CORS_option = {
    CORSConfiguration: {
      CORSRules: [
        {
          AllowedHeaders: ["*"],
          AllowedMethods: ["GET", "PUT"],
          AllowedOrigins: ["*"],
          MaxAgeSeconds: 3600,
        },
      ],
    },
  };

  async () => {
    await S3.putBucektCors(CORS_option);
  };

  return S3;
}
