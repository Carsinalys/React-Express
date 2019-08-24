import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import {
  the_same,
  gerOrders,
  multiPizzaTheSame,
  resetMultiPizza,
  reset_build
} from "../../AC/index";

import PrevOrders from "./pizzaBuilderMainOrders";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import MainInfo from "./pizzaBuilderMainInfo";

class PizzaBuilderMainPage extends React.Component {
  componentDidMount() {
    if (!Object.keys(this.props.orders).length) {
      this.props.getOrders();
    }
  }

  state = {
    rediect: false
  };

  wantTheSameHanler = event => {
    if (this.props.orders[event.target.dataset.id].pizzas) {
      this.props.resetMultiPizzaFun();
      this.props.reset_buildFun();
      this.props.multiTheSameFun(this.props.orders[event.target.dataset.id]);
    } else {
      this.props.resetMultiPizzaFun();
      this.props.reset_buildFun();
      this.props.theSameFun(this.props.orders[event.target.dataset.id]);
    }
    this.setState({ rediect: true });
  };

  render() {
    return (
      <section className="main__page__cover">
        <CSSTransition
          in={this.props.isLoading}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Spinner />
          </div>
        </CSSTransition>
        {this.state.rediect ? <Redirect to="/checkout" /> : null}
        <MainInfo />
        {this.props.getOrders ? (
          <PrevOrders
            orders={this.props.orders}
            theSame={this.wantTheSameHanler}
          />
        ) : (
          <div>Loading orders...</div>
        )}
      </section>
    );
  }
}

const stateToProps = state => {
  return {
    orders: state.orders.orders,
    isLoaded: state.orders.isLoaded,
    isLoading: state.orders.isLoading,
    error: state.orders.error,
    getOrders: state.orders.getOrders
  };
};

const dispatchToProps = dispatch => {
  return {
    theSameFun: obj => dispatch(the_same(obj)),
    getOrders: () => dispatch(gerOrders()),
    multiTheSameFun: obj => dispatch(multiPizzaTheSame(obj)),
    resetMultiPizzaFun: () => dispatch(resetMultiPizza()),
    reset_buildFun: () => dispatch(reset_build())
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(PizzaBuilderMainPage);
