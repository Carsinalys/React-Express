import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "../hoc/modal";

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
    let order = this.props.orders.filter(
      item => item._id.toString() === event.target.dataset.id
    )[0];
    // this is copy of ingredients for prevent mutating data
    let ingredients = {};
    Object.keys(order.ingredients).map(item => {
      ingredients[item] = { ...order.ingredients[item] };
    });
    const wantsOrder = {
      ...order,
      ingredients: ingredients
    };
    if (order.pizzas.length > 0) {
      this.props.resetMultiPizzaFun();
      this.props.reset_buildFun();
      this.props.multiTheSameFun(wantsOrder);
    } else {
      this.props.resetMultiPizzaFun();
      this.props.reset_buildFun();
      this.props.theSameFun(wantsOrder);
    }
    this.setState({ rediect: true });
  };

  render() {
    return (
      <>
        <section className="main__page__cover">
          <Modal toggle={this.props.isLoading}>
            <Spinner />
          </Modal>
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
      </>
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
