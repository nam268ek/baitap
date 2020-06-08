var express = require("express");
var controller = require("../controllers/bds.controller.js");
var router = express.Router();

router.get('/add', controller.addBds);

router.post('/add', controller.postAddBds)

router.get('/delete', controller.deleteBds);

router.get('/modify', controller.modifyBds);

router.get('/search', controller.searchBds);

module.exports = router;