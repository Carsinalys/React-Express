import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "../hoc/modal";

import {
  the_same,
  gerOrders,
  multiPizzaTheSame,
  resetMultiPizza,
  reset_build,
  gerUserPhotoAfterChange,
  getMoreOrders
} from "../../AC/index";

import PrevOrders from "./pizzaBuilderMainOrders";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import MainInfo from "./pizzaBuilderMainInfo";
import ShowMore from "./pizzaBuilderMainShowMore";

class PizzaBuilderMainPage extends React.Component {
  componentDidMount() {
    if (!Object.keys(this.props.orders).length) {
      this.props.getOrders();
    }
    if (localStorage) {
      if (
        (localStorage.getItem("id") && localStorage.getItem("photoChanged")) ||
        (localStorage.getItem("id") && localStorage.getItem("nameChanged"))
      ) {
        this.props.gerUserPhotoAfterChangeFun(localStorage.getItem("id"));
        localStorage.removeItem("id");
        localStorage.removeItem("photoChanged");
        localStorage.removeItem("nameChanged");
      }
    }
  }

  state = {
    rediect: false,
    showMore: false,
    curCounter: 10
  };

  wantTheSameHanler = event => {
    let order = this.props.orders.filter(
      item => item._id.toString() === event.target.dataset.id
    )[0];
    if (!order) {
      order = this.props.moreOrders.filter(
        item => item._id.toString() === event.target.dataset.id
      )[0];
    }
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevState.curCounter !== this.state.curCounter &&
      this.props.moreOrders.length < this.state.curCounter
    ) {
      this.props.getMoreOrdersFun(this.state.curCounter);
    }
  }

  showMoreHandler = () => {
    this.setState(prevState => {
      return { showMore: !prevState.showMore };
    });
  };

  moreOrdersHandler = () => {
    this.setState(prevState => {
      return {
        curCounter: +prevState.curCounter + 10
      };
    });
  };

  render() {
    return (
      <>
        <section className="main__page__cover">
          <Modal toggle={this.props.isLoading}>
            <Spinner />
          </Modal>
          {this.state.rediect ? <Redirect to="/checkout" /> : null}
          <MainInfo browser={this.props.browser} />
          {this.props.getOrders ? (
            <PrevOrders
              orders={this.props.orders}
              theSame={this.wantTheSameHanler}
              browser={this.props.browser}
              showMore={this.showMoreHandler}
              showMoreFetch={this.props.getMoreOrdersFun}
              triggerForFetch={this.state.showMore}
              counter={this.state.curCounter}
              counterStore={this.props.stateCounter}
              moreOrders={this.props.moreOrders}
            />
          ) : (
            <div>Loading orders...</div>
          )}
          <Modal toggle={this.state.showMore}>
            <ShowMore
              orders={this.props.moreOrders}
              theSame={this.wantTheSameHanler}
              browser={this.props.browser}
              counterStore={this.props.stateCounter}
              counter={this.state.curCounter}
              more={this.moreOrdersHandler}
            />
          </Modal>
        </section>
      </>
    );
  }
}

const stateToProps = state => {
  return {
    stateCounter: state.orders.count,
    moreOrders: state.orders.moreOrders,
    orders: state.orders.orders,
    isLoaded: state.orders.isLoaded,
    isLoading: state.orders.isLoading,
    error: state.orders.error,
    getOrders: state.orders.getOrders,
    browser: state.browser
  };
};

const dispatchToProps = dispatch => {
  return {
    theSameFun: obj => dispatch(the_same(obj)),
    getOrders: () => dispatch(gerOrders()),
    multiTheSameFun: obj => dispatch(multiPizzaTheSame(obj)),
    resetMultiPizzaFun: () => dispatch(resetMultiPizza()),
    reset_buildFun: () => dispatch(reset_build()),
    gerUserPhotoAfterChangeFun: id => dispatch(gerUserPhotoAfterChange(id)),
    getMoreOrdersFun: count => dispatch(getMoreOrders(count))
  };
};

export default connect(stateToProps, dispatchToProps)(PizzaBuilderMainPage);
