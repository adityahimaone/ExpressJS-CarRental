exports.addNewCar = (req, res) => {
  res.render("addNewCar", {
    title: "Add New Car",
    layout: "./layouts/sidebar",
  });
};
