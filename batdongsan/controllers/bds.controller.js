// var fs = require("fs");
var db
module.exports.addBds = (req, res) => {
  res.render("add");
};
module.exports.postAddBds = (req, res) => {};

module.exports.deleteBds = (req, res) => {};

module.exports.modifyBds = (req, res) => {};

module.exports.searchBds = (req, res) => {
  // fs.readFile("dataBds.json", { encoding: "utf-8" }, (err, data) => {
  //   var obj = JSON.parse(data);
  //   var item = obj.filter((item) => {
  //     return item.name.toLowerCase().indexOf(req.query.q.toLowerCase()) !== -1;
  //   });
  //   res.render("home", {
  //     products: item,
  //     value: req.query.q,
  //   });
  // });
  let query = req.query.value;
  let newArrUsers = db.find({name: query});
  res.render("home", {
    products: newArrUsers,
    value: query
  });
};
