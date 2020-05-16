var http = require("http");
var url = require("url");
var fs = require("fs");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapters = new FileSync("data.json");
const db = low(adapters);

db.defaults({ students: [] }).write();

var port = 8080;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    var query = url.parse(req.url).pathname;

    if (query == "/") {
      // Đọc file form hiển thị ra client
      fs.readFile("./view/form.html", { encoding: "utf-8" }, (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
      });
    } else if (query == "/formdata") {
      var q = url.parse(req.url, true).query;
      // Lấy dữ liệu từ file json
      var data = db.get("students").value();
      // Xác thực dữ liệu trùng lặp
      if (data.length == 0) {
        db.get("students")
          .push({
            mssv: q.mssv,
            name: q.name,
            class: q.class.toLocaleUpperCase(),
            subject: q.subject,
          })
          .write();
      } else {
        for (items in data) {
          if (items.mssv == q.mssv) {
            res.write("The data has been added before.");
            res.end();
          } else {
            db.get("students")
              .push({
                mssv: q.mssv,
                name: q.name,
                class: q.class.toLocaleUpperCase(),
                subject: q.subject,
              })
              .write();
          }
        }
      }

      // Gửi dữ liệu vào localStorage
      res.write('<script type="text/javascript" >');
      res.write(
        "localStorage.setItem(" +
          JSON.stringify(q.mssv) +
          "," +
          JSON.stringify(q.name) +
          ")"
      );
      res.write("</script>");
      res.end("hello");
    }
  })
  .listen(`${port}`);
