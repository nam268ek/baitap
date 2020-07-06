var express = require("express");
var app = express();
var ejsRouters = require("./routers/ejs.route");
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./database/data.db", (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Connected to the in-memory SQlite database.");
});
app.get("/", (req, res) => {
  db.all("SELECT id, name, age FROM user", (err, rows) => {
    if (err) throw err;
    rows.forEach((row) => {
      //console.log(row.id, row.name, row.age);
    });
    console.log(dt);
  });
});

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", ejsRouters);

app.listen(8080);
