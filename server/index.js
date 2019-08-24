import Express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import fs from "fs";
import App from "../src/js/storeConnectToApp";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("Loading...");

const app = Express();

app.use("/dist", Express.static("dist"));
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
