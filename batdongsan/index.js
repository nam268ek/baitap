const express = require("express");


const app = express();
var fs = require("fs");
var bdsRouter = require("./routers/bds.route.js");

app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  //   fs.readFile("dataBds.json", { encoding: "utf-8" }, (err, data) => {
  //     var obj = JSON.parse(data);
  //     res.render("home", {
  //       products: obj,
  //     });
  //   });
  let obj = db.get("products").value();
  res.render("home", {
      products: obj
  });
});

app.use("/bds", bdsRouter);

app.listen(9090, () => {
  console.log("----Connected------");
});
