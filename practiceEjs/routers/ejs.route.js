var express = require("express");
var router = express.Router();
var controller = require("../controllers/ejs.controller");

router.get("/", controller.ejs);

module.exports = router;