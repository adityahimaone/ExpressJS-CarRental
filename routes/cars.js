var express = require("express");
var router = express.Router();
const carsCtrl = require("../controllers/carsCtrl");
/* GET home page. */
router.get("/", carsCtrl.cars);

module.exports = router;
