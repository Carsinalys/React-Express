import Express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import fs from "fs";
import App from "./src/js/serverConnectProps";
import path from "path";
import Obj from "./src/random_gen";

const PORT = process.env.PORT || 3000;

const html = fs.readFileSync("dist/index.html").toString();

const parts = html.split("Loading...");

const app = Express();

app.get("/generate", (req, res) => {
  res.send(`<div>${Obj.generateRandomToken()}</div>`);
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
