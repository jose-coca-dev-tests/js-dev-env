import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  devtool: "eval-source-map",
  entry: "./src/indexBundler.js",
  output: {
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: "src/bundle.html",
      filename: "bundle.html"
    })
  ],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
