var express = require("express");
var app = express();
var db = require("./models/xe.model");
var xesRouters = require("./routers/xe.route");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", {
    xe: db.get("xe").value(),
  });
});

app.use("/xe", xesRouters);

app.listen(8080, () => {
  console.log("----Connected----");
});
