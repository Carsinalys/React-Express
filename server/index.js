import Express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import fs from "fs";
import App from "../src/js/serverConnectProps";
import path from "path";
import Obj from "./callbacks/user";
const morgan = require("morgan");
const orders = require("./callbacks/orders");
const reviews = require("./callbacks/reviews");

const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("Loading...");
const app = Express();

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(Express.json());

//allow to fetch without block cors error on di
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, POST, DELETE, OPTIONS"
  );
  next();
});

app
  .route("/api/v1.0/user/:query")
  .get(Obj.getUserInfoFun)
  .post(Obj.UserFun)
  .patch(Obj.updateUserFun);

app
  .route("/api/v1.0/orders")
  .get(orders.getOrders)
  .post(orders.addOrder)
  .delete(orders.deleteOrder);

app
  .route("/api/v1.0/reviews")
  .get(reviews.getReviews)
  .post(reviews.addReviews)
  .patch(reviews.editReviews);

app.use("/assets/", Express.static(path.join(__dirname, "../dist/assets")));
app.use((req, res) => {
  const context = {};

  const ReactMarkup = (
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  res.send(parts[0] + renderToString(ReactMarkup) + parts[1]);
  res.end();
});

module.exports = app;
