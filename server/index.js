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

app.post("/api/v1.0/createUser", (req, res) => {
  const user = Obj.createUser(req.body.mail, req.body.pass, req.body.check);
  res.status(200).send(JSON.stringify(user));
  res.end();
});

app
  .route("/api/v1.0/orders")
  .get(orders.getOrders)
  .post(orders.addOrder)
  .delete(orders.deleteOrder);

app
  .route("/api/v1.0/reviews")
  .get(reviews.getReviews)
  .post(reviews.addReviews);

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
