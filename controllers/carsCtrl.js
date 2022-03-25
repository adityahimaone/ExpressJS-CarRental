const cars = require("../models/listCar");

exports.cars = (req, res) => {
  cars.findAll().then((car) => {
    res.render("cars", {
      title: "Cars",
      nav: "CARS",
      nav_child: "List Car",
      layout: "./layouts/sidebar",
      car,
      pageActive: "cars",
    });
  });
};
