const orders = require("../models/listOrder");

exports.dashboard = (req, res) => {
  orders.findAll().then((listOrders) => {
    res.render("dashboard", {
      title: "Dashboard",
      nav: "DASHBOARD",
      nav_child: "Dashboard",
      layout: "./layouts/sidebar",
      listOrders,
    });
  });
};
