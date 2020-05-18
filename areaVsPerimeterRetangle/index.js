var http = require("http");
var url = require("url");
var fs = require("fs");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    var urlName = url.parse(req.url).pathname;
    if (urlName == "/temp") {
      fs.readFile("./view/home2.html", (err, data) => {
        res.write(data);
        res.end();
      });
    }

    if (urlName == "/") {
      fs.readFile("./view/home.html", { encoding: "utf-8" }, (err, data) => {
        res.write(data);
        res.end();
      });
    }
    if (urlName == "/formdientich") {
      fs.readFile(
        "./view/dientich.html",
        { encoding: "utf-8" },
        (err, data) => {
          res.write(data);
          res.end();
        }
      );
    } else if (urlName == "/formchuvi") {
      fs.readFile("./view/chuvi.html", { encoding: "utf-8" }, (err, data) => {
        res.write(data);
        res.end();
      });
    } else if (urlName == "/calchuvi") {
      var q = url.parse(req.url, true).query;
      var chuvi = () => {
        return (parseInt(q.ipA) + parseInt(q.ipB)) * 2;
      };
      res.write("<h2>Result:\n" + chuvi() + "</h2>");
      res.write("<a href=\"/\">Home</a>");
      res.end();
    } else if (urlName == "/caldientich") {
      var q = url.parse(req.url, true).query;
      var dt = () => {
        return parseInt(q.ipA) * parseInt(q.ipB);
      };
      res.write("<h2>Result:\n" + dt() + "</h2>");
      res.end();
    }
  })
  .listen(8080);
