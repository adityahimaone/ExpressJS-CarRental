exports.dashboard = (req, res) => {
  res.render("dashboard", { title: "Dashboard", layout: "./layouts/sidebar" });
};
