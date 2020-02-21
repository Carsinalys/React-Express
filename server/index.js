import Express, { request } from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");
const compression = require("compression");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");

const routeOrders = require("./routes/orders");
const routeReviews = require("./routes/reviews");
const routeBuilds = require("./routes/builds");
const routeChat = require("./routes/chat");
const routeUser = require("./routes/user");

import App from "../src/js/serverConnectProps";

const ErrorHandler = require("./utils/errorHandler");
const globalErrorHandler = require("./controllers/error");
const html = fs.readFileSync("dist/index.html").toString();
const parts = html.split("Loading...");

//GrqphQL
const { ApolloServer } = require("apollo-server-express");
const types = require("./graphQL/types");
const resolvers = require("./graphQL/resolves");

const server = new ApolloServer({
  typeDefs: types,
  resolvers,
  context({ req, res }) {
    return { req, res };
  }
});

const app = Express();
//body, form and cookie parsers
app.use(Express.json({ limit: "300kb" }));
app.use(Express.urlencoded({ extended: true, limit: "10kb" }));
app.use(cookieParser());

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
app.use("/api", limiter, routeReviews);
//compression data sending to client
app.use(compression());

app.disable("x-powered-by");

//GrqphQL
server.applyMiddleware({ app });
console.log(`for GraphQL query ${server.graphqlPath}`);

//app.use(cors());
app.use(cors({ credentials: true, origin: "http://localhost:3001/" }));

app.use("/", routeOrders, routeBuilds, routeReviews, routeChat, routeUser);
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
