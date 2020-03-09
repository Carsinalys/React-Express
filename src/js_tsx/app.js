import React from "react";
import { connect } from "react-redux";
import { getTokenFromCookie, checkBrowser } from "./AC/index";

import PizzaBuilder from "./conponents/pizzaBuilder";
import { BrowserRouter } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.getToketFun();
    this.props.checkBrowserFun();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="container__color">
          <div className="container">
            <PizzaBuilder />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const dispatchToProps = dispatch => {
  return {
    getToketFun: () => dispatch(getTokenFromCookie()),
    checkBrowserFun: () => dispatch(checkBrowser())
  };
};

export default connect(null, dispatchToProps)(App);
