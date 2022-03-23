const orders = require("../models/listOrder");

exports.cars = (req, res) => {
  orders.findAll().then((listOrders) => {
    console.log(listOrders);
    res.render("cars", {
      title: "cars",
      nav: "CARS",
      nav_child: "List Car",
      layout: "./layouts/sidebar",
      listOrders,
    });
  });
};
