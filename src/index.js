import "./libs/normalize-css/normalize.css";
import "./scss/main.scss";

import React from "react";
import { render } from "react-dom";

import App from "./js/storeConnectToApp";

render(
    <App />,
  document.getElementById("app")
);
