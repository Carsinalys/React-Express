import React from "react";
import { connect } from "react-redux";
import { getTokenFromCookie, checkBrowser } from "./AC/index";
import PizzaBuilder from "./conponents/pizzaBuilder";
import { BrowserRouter } from "react-router-dom";
import { DispatchVoid } from "./interfaces/interfaces";
import { Dispatch} from 'redux';

interface CurProps {
  getToketFun: () => { type: string };
  checkBrowserFun: () => void;
}

class App extends React.Component<CurProps, {}> {
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

const dispatchToProps = (dispatch: DispatchVoid extends Dispatch) => {
  return {
    getToketFun: () => dispatch(getTokenFromCookie()),
    checkBrowserFun: () => dispatch(checkBrowser())
  };
};

const stateToProps = null

export default connect(stateToProps, dispatchToProps)(App);
