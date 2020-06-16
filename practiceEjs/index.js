var express = require("express");
var app = express();
var ejsRouters = require("./routers/ejs.route");


app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", ejsRouters);

app.listen(8080);
