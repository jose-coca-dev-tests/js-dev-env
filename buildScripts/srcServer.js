import express from "express";
import path from "path";
import open from "open";

const port = 3000;
const app = express();

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