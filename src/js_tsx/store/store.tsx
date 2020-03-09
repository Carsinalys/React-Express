import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";

import reducer from "../reducer/index";

import Logger from "../middleWares/logger";
// this constant needs for connect browser redux extention to your app
const isBrowser = typeof window !== "undefined";
let store;
if (isBrowser) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(Logger, Thunk))
  );
} else {
  const composeEnhancers = compose;

  store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(Logger, Thunk))
  );
}

//dev only
if (isBrowser)
  Object.defineProperty(window, "store", {
    value: store,
    writable: false
  });

export default store;
