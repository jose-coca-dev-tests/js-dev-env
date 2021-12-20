import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

// next line will disable the console rule of eslint, it is proper to do so in build scripts like this
/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(express.static("dist"));
app.use(compression());

app.get("/bundle.html", function (req, res) {
  res.sendFile(path.join(__dirname, "../dist/bundle.html"));
});

app.get("/users", function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});