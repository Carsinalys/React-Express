import Express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import fs from "fs";
import App from "../src/js/serverConnectProps";
import path from "path";
import Obj, { uploadUserPhoto } from "./controllers/user";
const morgan = require("morgan");
const ErrorHandler = require("./utils/errorHandler");
const orders = require("./controllers/orders");
const reviews = require("./controllers/reviews");
const message = require("./controllers/message");
const room = require("./controllers/rooms");
const builds = require("./controllers/builds");
const resetPass = require("./controllers/resetPassword");
const globalErrorHandler = require("./controllers/error");
const { isAuthenticated } = require("./controllers/isAuthenticated");
const restrictTo = require("./controllers/restrictTo");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");

const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("Loading...");
const app = Express();
//crossdomain headers
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Credentials", true);
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT, PATCH");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept,X-HTTP-Method-Override"
//   );
//   next();
// });
//for heroku because it`t act like proxy
app.enable("trust proxy");

//settings for pug
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//static images css js and other files
app.use("/assets/", Express.static(path.join(__dirname, "../dist/assets")));

//dev logging requests
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

//security http headers
app.use(helmet());

//body, form and cookie parsers
app.use(Express.json({ limit: "10kb" }));
app.use(Express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

//data sanitization against NoSQL query injection
app.use(mongoSanitize());

//data sanitization against XSS
app.use(xss());

//prevent parameter pollution, van add options like { whitelist: ['queryName','queryName'...]  }
app.use(hpp({ whitelist: ["cost", "totalCost"] }));

//limit calls from one api against atacks
const limiter = rateLimit({
  max: 100,
  windowMs: 10 * 20 * 1000,
  message: "Too many requests from this IP, try again later."
});
app.use("/api", limiter);
//compression data sending to client
app.use(compression());

app.disable("x-powered-by");
//implement cors
app.use(cors());

app.get("/test", (req, res) => {
  res.status("200").render("base", {
    id: "12345",
    name: "Www"
  });
});

app.route("/api/v1.0/builds/addReview").post(builds.addReview);
app
  .route("/api/v1.0/builds")
  .post(isAuthenticated, builds.setBuilds)
  .get(builds.getBuilds);
app
  .route("/api/v1.0/chatRooms")
  .post(room.createroom)
  .get(room.getRooms);
app
  .route("/api/v1.0/roomMessages")
  .get(message.getMessages)
  .delete(message.deleteMessage);
app.route("/api/v1.0/resetPassword").post(resetPass.resetPassword);
app.route("/api/v1.0/confirmPassword/:id").get(resetPass.confirmPassword);
app.route("/api/v1.0/confirmRefresh").post(resetPass.confirmRefresh);
app.route("/api/v1.0/changeMail").patch(isAuthenticated, Obj.changeEmailFun);
app.route("/api/v1.0/user/logOut").post(Obj.logOutFun);
app
  .route("/api/v1.0/user/setPhoto")
  .post(
    isAuthenticated,
    Obj.uploadUserPhotoFun,
    Obj.resizeUserPhotoFun,
    Obj.updateUserFun
  );
app
  .route("/api/v1.0/user/:query")
  .get(Obj.getUserInfoFun)
  .post(Obj.UserFun)
  .patch(isAuthenticated, Obj.updateUserFun);
app
  .route("/api/v1.0/orders")
  .get(orders.getOrders)
  .post(isAuthenticated, orders.addOrder)
  .delete(isAuthenticated, restrictTo("user", "admin"), orders.deleteOrder);
app
  .route("/api/v1.0/reviews")
  .get(reviews.getReviews)
  .post(isAuthenticated, reviews.addReviews)
  .patch(isAuthenticated, reviews.editReviews)
  .delete(isAuthenticated, restrictTo("user", "admin"), reviews.deleteReview);
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
//route for define unknown requests
app.all("*", (req, res, next) => {
  next(new ErrorHandler(`Can't find ${req.originalUrl} on this server!`, 404));
});
//error handle middleware
app.use(globalErrorHandler);

module.exports = app;
