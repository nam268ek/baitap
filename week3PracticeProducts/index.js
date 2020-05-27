// Use Express
const express = require("express");
const fs = require("fs");

const app = express();
const port = 8080;

app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  fs.readFile("data.json", { encoding: "utf-8" }, (err, data) => {
    var obj = JSON.parse(data);
    res.render("products", {
      products: obj,
    });
  });
});

app.get("/search", (req, res) => {
  fs.readFile("data.json", { encoding: "utf-8" }, (err, data) => {
    var obj = JSON.parse(data);
    var item = obj.filter((item) => {
      return item.name.toLowerCase().indexOf(req.query.q.toLowerCase()) !== -1;
    });
    res.render("products", {
      products: item,
      value: req.query.q,
    });
  });
});
app.listen(port, () => {
  console.log("Connected to port ", port);
});
//-------------------------------------------------------
// NodeJS tutorial app
//
// var http = require("http");
// var url = require("url");
// var fs = require("fs");
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/html" });
//     var urlName = url.parse(req.url).pathname;
//     if (urlName == "/") {
//       fs.readFile("./view/home.html", (err, data) => {
//         res.write(data);
//         res.end();
//       });
//     } else if (urlName == "/product") {
//       fs.readFile("./data.json", (err, data) => {
//         var obj = JSON.parse(data);
//         res.write("<h1>Products Name:</h1>");
//         for (items of obj) {
//           res.write("<br>" + items.name);
//         }
//         res.end();
//       });
//     } else if (urlName == "/searchName") {
//       var product = url.parse(req.url, true).query;
//       fs.readFile("./data.json", (err, data) => {
//         if (err) throw err;
//         var obj = JSON.parse(data);
//         res.write("<h1>Product Name:</h1>");
//         var newArr = obj.filter((sp) => {
//           return (
//             sp.name.toLowerCase().indexOf(product.search.toLowerCase()) !== -1
//           );
//         });
//         newArr.map((data) => {
//           res.write("<br>" + data.name);
//         });
//         res.write("<br><a href=\"/\">Home</a>")
//         res.end();
//       });
//     }
//   })
//   .listen(8080);
//---------------------------------------------------
