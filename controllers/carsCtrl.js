exports.cars = (req, res) => {
  res.render("cars", { title: "cars", layout: "./layouts/sidebar" });
};
