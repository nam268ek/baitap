var express = require("express");
var app = express();
var db = require("./models/flights.model");
var flightsRouters = require("./routers/flights.route");
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", {
    flights: db.get("flights").value(),
  });
});

app.use("/flight", flightsRouters);

app.listen(8080, () => {
  console.log("----Connected----");
});
