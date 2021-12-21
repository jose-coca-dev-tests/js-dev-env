import path from "path";
import CopyPlugin from "copy-webpack-plugin";

export default {
  mode: "production",
  devtool: "source-map",
  entry: "./src/indexBundler.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new CopyPlugin({patterns:[{from: path.resolve(__dirname, "./src/bundle.html")},],})
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
