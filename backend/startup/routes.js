const express = require("express");
const users = require("../routes/users");
const auth = require("../routes/auth");
const bookings = require("../routes/bookings");
const products = require("../routes/products");
const orders = require("../routes/orders");

const error = require("../middleware/error");
module.exports = function (app) {
  app.use(express.json());
  app.use("/api/users", users);
  app.use("/api/auth", auth);
  app.use("/api/bookings", bookings);
  app.use("/api/products", products);
  app.use("/api/orders", orders);
  app.use(error);
};
