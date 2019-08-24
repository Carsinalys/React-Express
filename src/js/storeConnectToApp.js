import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import  App from './app';


class AppWithStore extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default AppWithStore;