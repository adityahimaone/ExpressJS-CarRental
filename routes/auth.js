var express = require("express");
var router = express.Router();
const { auth } = require("../controllers");
// const LayoutName = (req, res, next) => {
//   res.locals.layout = `layouts/${LayoutName}`;
//   next();
// };

// router.use(LayoutName(auth));
router.get("/", auth.index);
router.post("/", auth.api.login);

module.exports = router;
