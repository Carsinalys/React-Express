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
  getMoreOrders
} from "../../AC/index";

import PrevOrders from "./pizzaBuilderMainOrders";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import MainInfo from "./pizzaBuilderMainInfo";
import ShowMore from "./pizzaBuilderMainShowMore";
import { Dispatch } from "redux";
import { Pizza, Order, NewIngredientsObj } from '../../interfaces/interfaces';
import { Ingredients, IngredientsObj } from "../../reducer/pizzaState";

interface Props {
  theSameFun: (obj: Pizza) => {
    type: string;
    payload: Pizza;
  }
  getOrders: (num: number) => any;
  multiTheSameFun: (order: Order) => {
    type: string;
    payload: Order;
  }
  resetMultiPizzaFun: () => {type:string}
  reset_buildFun: ()=> {type:string}
  getMoreOrdersFun: (num: number) => any;
  stateCounter: number | undefined;
  moreOrders: Order[];
  isLoaded: boolean;
  isLoading: boolean;
  error: boolean;
  getOrdersState: boolean;
  browser: {
    safari: boolean
  }
  orders: Order[];
}

interface State {
  rediect: boolean;
  showMore: boolean;
  curCounter: number;
}

class PizzaBuilderMainPage extends React.Component<Props, State> {
  componentDidMount() {
    if (!Object.keys(this.props.orders).length) {
      this.props.getOrders(3);
    }
  }

  state = {
    rediect: false,
    showMore: false,
    curCounter: 10
  };

  wantTheSameHanler = (event: MouseEvent) => {
    const el = event.target as HTMLElement
    let order = this.props.orders.filter(
      item => item._id === el.dataset.id
    )[0];
    if (!order) {
      order = this.props.moreOrders.filter(
        item => item._id.toString() === el.dataset.id
      )[0];
    }
    // this deep is copy of ingredients for prevent mutating data
    let wantsOrder = {};
    if (order.ingredients) {
      let ingredients = {} as IngredientsObj;
      Object.keys(order.ingredients).map(item => {
        const newItem = item as Ingredients;
        ingredients[newItem] = { ...order.ingredients[newItem] };
      });
      wantsOrder = {
        ...order,
        ingredients: ingredients
      };
    } else {
      let newPizzas = order.pizzas!.map(pizza => {
        let newPizza = { ...pizza };
        Object.keys(pizza.ingredients).map(item => {
          const newItem = item as Ingredients;
          newPizza.ingredients[newItem] = { ...pizza.ingredients[newItem] };
        });
        return newPizza;
      });
      wantsOrder = {
        ...order,
        pizzas: newPizzas
      };
    }
    if (order.pizzas!.length > 0) {
      const newPizza = wantsOrder as Order; 
      this.props.resetMultiPizzaFun();
      this.props.reset_buildFun();
      this.props.multiTheSameFun(newPizza);
    } else {
      const newPizza = wantsOrder as Pizza; 
      this.props.resetMultiPizzaFun();
      this.props.reset_buildFun();
      this.props.theSameFun(newPizza);
    }
    this.setState({ rediect: true });
  };

  componentDidUpdate(prevProps: Props, prevState: State) {
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
          {this.props.getOrdersState ? (
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

const stateToProps = (state: any) => {
  return {
    stateCounter: state.orders.count,
    moreOrders: state.orders.moreOrders,
    orders: state.orders.orders,
    isLoaded: state.orders.isLoaded,
    isLoading: state.orders.isLoading,
    error: state.orders.error,
    getOrdersState: state.orders.getOrders,
    browser: state.browser
  };
};

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    theSameFun: (obj: Pizza) => dispatch(the_same(obj)),
    getOrders: (num: number) => dispatch(gerOrders(num)),
    multiTheSameFun: (obj: Order) => dispatch(multiPizzaTheSame(obj)),
    resetMultiPizzaFun: () => dispatch(resetMultiPizza()),
    reset_buildFun: () => dispatch(reset_build()),
    getMoreOrdersFun: (count: number) => dispatch(getMoreOrders(count))
  };
};

export default connect(stateToProps, dispatchToProps)(PizzaBuilderMainPage);
