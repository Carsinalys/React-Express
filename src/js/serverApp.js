import React from "react";
import { connect } from "react-redux";
import { getTokenFromCookie } from "./AC/index";

import PizzaBuilder from "./conponents/serverPizzaBuilder";

class App extends React.Component {
  componentDidMount() {
    this.props.getToketFun();
  }

  render() {
    return (
      <div className="container__color">
        <div className="container">
          <PizzaBuilder />
        </div>
      </div>
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
