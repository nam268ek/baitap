var http = require("http");
var url = require("url");
var fs = require("fs");
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    var urlName = url.parse(req.url).pathname;
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
      fs.readFile("./view/result.html", { encoding: "utf-8" }, (err, data) => {
        res.write(data, () => {
          return chuvi();
        });
        res.end();
      });

    } else if (urlName == "/caldientich") {
      var q = url.parse(req.url, true).query;
      var dt = () => {
        return parseInt(q.ipA) * parseInt(q.ipB);
      };
      res.write("<span>dien tich la: </span>" + dt());
      res.end();
    }
  })
  .listen(8080);
