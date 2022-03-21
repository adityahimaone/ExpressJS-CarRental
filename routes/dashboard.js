var express = require("express");
var router = express.Router();
const dashboardCtrl = require("../controllers/dashboardCtrl");
/* GET home page. */
router.get("/", dashboardCtrl.dashboard);

module.exports = router;
