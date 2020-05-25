require("dotenv").config();

const express = require("express");
const mysql = require("mysql");

// Create a connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

//Connect
db.connect();

const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("Connect nam268ek");
  res.send("Connect");
  res.end();
});

app.listen("8080", () => {
  console.log("Server running is port 8080.");
});
