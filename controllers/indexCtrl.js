exports.index = (req, res) => {
  res.render("index", { title: "Login", api: require("./auth/api") });
};
