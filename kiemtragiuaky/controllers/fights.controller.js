var shortid = require("shortid");
var db = require("../models/flights.model");

module.exports.addFlight = (req, res) => {
  res.render("addFlight");
};

module.exports.postAddFlight = (req, res) => {
  let newObj = {
    flightid: shortid.generate(),
    flightname: req.body.flightname,
    depart: req.body.depart,
    arrive: req.body.arrive,
    flightdate: req.body.flightDate,
  };
  newObj = db.get("flights").push(newObj).write();
  res.render("home", {
    flights: newObj,
  });
};

module.exports.putModifyFlight = (req, res) => {
  let obj = db.get("flights").value();
  obj.map((item) => {
    if (item.flightid === req.params.id) {
      res.send(item);
      var obj = db
        .get("flights")
        .find({ depart: item.depart })
        .assign({ depart: req.body.depart })
        .write();
      res.render("home", {
        flights: obj,
      });
    }
  });
};

module.exports.viewFlightDate = (req, res) => {
  res.render("flightDate");
};

module.exports.viewFlightDateResult = (req, res) => {
  let obj = db
    .get("flights")
    .value()
    .filter((item) => item.flightdate === req.query.flightDate);
  res.render("home", {
    flights: obj,
  });
};
