var shortid = require("shortid");
var db = require("../models/xe.model");

module.exports.addXe = (req, res) => {
  res.render("addFlight");
};

module.exports.getAddXe = (req, res) => {
  let newObj = {
    maxe: shortid.generate(),
    tenxe: req.body.tenxe,
    soxe: req.body.soxe,
    hangsx: req.body.hangsx,
    mauxe: req.body.mauxe,
    tenchu: req.body.tenchu,
  };
  newObj = db.get("xe").push(newObj).write();
  res.render("home", {
    xe: newObj,
  });
};

// module.exports.putModifyFlight = (req, res) => {
//   let obj = db.get("flights").value();
//   obj.map((item) => {
//     if (item.flightid === req.params.id) {
//       res.send(item);
//       var obj = db
//         .get("flights")
//         .find({ depart: item.depart })
//         .assign({ depart: req.body.depart })
//         .write();
//       res.render("home", {
//         flights: obj,
//       });
//     }
//   });
// };

module.exports.viewXe = (req, res) => {
  res.render("flightDate");
};

module.exports.viewXeResult = (req, res) => {
  let obj = db
    .get("xe")
    .value()
    .filter((item) => item.tenxe === req.query.tenxe);
  res.render("home", {
    xe: obj,
  });
};
