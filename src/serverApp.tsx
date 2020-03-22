import React from "react";
import { hydrate } from "react-dom";
import App from "./js/storeConnectToApp";

hydrate(<App />, document.getElementById("app"));
