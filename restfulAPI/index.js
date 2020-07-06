var express = require("express");
var app = express();
var port = 8080;
//var db = require("./models/database.model.js");
var sqlite3 = require("sqlite3").verbose();
//var md5 = require("md5");

const DBSOURCE = "./models/db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err)=>{
    if(err) {
        console.log(err.message);
        throw err
    }
    console.log("Connected DBSOURCE");
});

app.use(express.static("public"));
app.use("views engine", "ejs");

app.get("/", (req,res) =>{
  res.render("index");
});

app.get("/api/products", (req, res, next) => {
  var products = "SELECT * FROM products";
  var params = [];
  db.all(products, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
        "message":"success",
        "data":rows
    })
  });
});

app.listen(port, () => {
  console.log("Connected server to", port);
});
