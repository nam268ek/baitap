var express = require("express");
var router = express.Router();
var controller = require("../controllers/xe.controller");

router.get("/add", controller.addXe);
router.post("/add", controller.getAddXe);

//router.put('/modify/:id', controller.putModifyFlight);

router.get('/search', controller.viewXe);
router.get('/search/result', controller.viewXeResult);

module.exports = router;