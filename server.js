import Express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import fs from "fs";
import App from "./src/js/serverConnectProps";
import path from "path";
import Obj from "./server/random_gen";
const morgan = require("morgan");
require("dotenv").config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("Loading...");

const app = Express();

//console.log(process.env);

if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(Express.json());

app.get("/generate", (req, res) => {
  res.send(`<div>${Obj.generateRandomToken()}</div>`);
  res.end();
});

app.post("/api/v1.0/createUser", (req, res) => {
  const user = Obj.createUser(req.body.mail, req.body.pass, req.body.check);
  res.send(JSON.stringify(user));
  res.end();
});

app.use("/assets/", Express.static(path.join(__dirname, "dist/assets")));
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

console.log("lisening on ", PORT);

app.listen(PORT);
