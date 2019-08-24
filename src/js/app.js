import React from "react";
import { connect } from "react-redux";
import { getTokenFromCookie } from "./AC/index";

import PizzaBuilder from "./conponents/pizzaBuilder";
import { BrowserRouter, StaticRouter } from "react-router-dom";

class App extends React.Component {
  componentDidMount() {
    this.props.getToketFun();
  }

  render() {
    return (
      <BrowserRouter basename="/">
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
    getToketFun: () => dispatch(getTokenFromCookie())
  };
};

export default connect(
  null,
  dispatchToProps
)(App);
