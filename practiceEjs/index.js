var express = require("express");
var app = express();
var ejsRouters = require("./routers/ejs.route");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/", ejsRouters);

app.listen(8080);
