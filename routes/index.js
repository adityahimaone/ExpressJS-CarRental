var express = require("express");
var router = express.Router();
const indexCtrl = require("../controllers/indexCtrl");
// const auth = require("./auth");

/* GET home page. */
// router.use("./auth", auth);
router.get("/", indexCtrl.index);
// router.post("/", auth.api.login);

module.exports = router;
