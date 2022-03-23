var express = require("express");
var router = express.Router();
const addNewCarCtrl = require("../controllers/addNewCarCtrl");
/* GET home page. */
router.get("/", addNewCarCtrl.addNewCar);

module.exports = router;
