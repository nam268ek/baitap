var express = require("express");
var router = express.Router();
var controller = require("../controllers/fights.controller");

router.get("/add", controller.addFlight);
router.post("/add", controller.postAddFlight);

router.put('/modify/:id', controller.putModifyFlight);

router.get('/viewDate', controller.viewFlightDate);
router.get('/viewDate/result', controller.viewFlightDateResult);

module.exports = router;