import PizzaState from "./pizzaState";
import FetchOrders from "./fetchingData";
import FetchReviews from "./fetchingReviews";
import FetchOrder from "./fetchOrder";
import Auth from "./pizzaAuth";
import Cabinet from "./pizzaCabinet";
import CabinetSet from "./pizzaCabinetSet";
import CabinerGetOrders from "./pizzaCabinetGetOrders";
import AuthReset from "./pizzaAuthReset";
import MultiAdd from "./multipleOrder";
import ReadyBuilds from "./readyBuilds";
import Chat from "./chat";
import Browser from "./browser";

import { combineReducers } from "redux";

export default combineReducers({
  pizza: PizzaState,
  orders: FetchOrders,
  reviews: FetchReviews,
  order: FetchOrder,
  auth: Auth,
  cabinet: Cabinet,
  cabinetSet: CabinetSet,
  cabinetGetOrders: CabinerGetOrders,
  authReset: AuthReset,
  multi: MultiAdd,
  builds: ReadyBuilds,
  chat: Chat,
  browser: Browser
});
