const webpack = require("webpack");

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env.MONGO_URL": JSON.stringify(process.env.MONGO_URL),
      "process.env.DEV_URL": JSON.stringify(process.env.DEV_URL),
      "process.env.DB_NAME": JSON.stringify(process.env.DB_NAME),
    }),
  ],
};
