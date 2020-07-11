var express = require("express");
var sqlite3 = require("sqlite3").verbose();
var bodyParser = require("body-parser");
var randomstring = require("randomstring");

var app = express();
var port = 8080;

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

let db = new sqlite3.Database("./db.sqlite", (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  }
  console.log("Connected DBSOURCE");
});

app.get("/", (req, res) => {
  res.render("index", {
    products: undefined,
  });
});

app.get("/products", (req, res, next) => {
  db.all("SELECT * FROM products", (err, rows) => {
    res.render("index", {
      products: rows,
    });
  });
});

app.get("/products/search", (req, res) => {
  var productName = req.query.search;
  var search = `SELECT * FROM products WHERE productName = "${productName}"`;
  db.all(search, (err, rows) => {
    res.render("index", {
      products: rows,
    });
  });
});

app.get("/products/add", (req, res, next) => {
  res.render("addProducts");
});
app.post("/products/add", (req, res, next) => {
  const productId = randomstring.generate(32);
  const insert = `INSERT into products values('${productId}','${req.body.productName}', '${req.body.supplier}', ${req.body.origin}, '${req.body.expirydate}')`;
  db.run(insert, (err) => {
    if (err) throw err;
    console.log("Success");
  });
  res.redirect("/products");
});

app.listen(port, () => {
  console.log("Connected server to", port);
});
