import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/bundle.html", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/bundle.html"));
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.get('/index.js',function(req,res){
    res.sendFile(path.join(__dirname, '../src/index.js')); 
});

app.get('/myLib.js',function(req,res){
    res.sendFile(path.join(__dirname, '../src/myLib.js')); 
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});