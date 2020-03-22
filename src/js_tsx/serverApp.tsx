import React from "react";
import { connect } from "react-redux";
import { getTokenFromCookie } from "./AC/index";
import { Dispatch } from 'redux';

import PizzaBuilder from "./conponents/serverPizzaBuilder";

interface Props {
  getToketFun: () => { type: string };
}

class App extends React.Component<Props,{}> {
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

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    getToketFun: () => dispatch(getTokenFromCookie())
  };
};

export default connect(null, dispatchToProps)(App);
