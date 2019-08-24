import { createStore, applyMiddleware, compose } from "redux";
import Thunk from "redux-thunk";

import reducer from "../reducer/index";

import Logger from "../middleWares/logger";
// this constant needs for connect browser redux extention to your app
let store;
if (process.browser) {
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
if (process.browser) window.store = store;

export default store;
