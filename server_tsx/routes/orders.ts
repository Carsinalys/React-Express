const express = require("express");
const router = express.Router();
const { isAuthenticated } = require("../controllers/isAuthenticated");
const orders = require("../controllers/orders");
const restrictTo = require("../controllers/restrictTo");

router
  .route("/api/v1.0/orders")
  .get(orders.getOrders)
  .post(isAuthenticated, orders.addOrder)
  .delete(isAuthenticated, restrictTo("user", "admin"), orders.deleteOrder);

module.exports = router;
