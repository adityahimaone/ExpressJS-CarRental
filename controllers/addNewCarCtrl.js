exports.addNewCar = (req, res) => {
  res.render("addNewCar", {
    title: "Add New Car",
    layout: "./layouts/sidebar",
    nav: "CARS",
    nav_child: "List Car",
  });
};
