import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import {
  plus,
  minus,
  reset_build,
  multipleAdd,
  deleteMultiOrder,
  resetMultiPizza
} from "../../AC/index";

import PizzaBuilderPizza from "./pizzaBuilderPizza";
import PizzaBuilderControls from "./pizzaByilderControls";
import Cover from "../hoc/cover";
import UlSelect from "./pizzaBuilderUlSelect";
import OrderControls from "./pizzaBuilderOrder";
import Modal from "../hoc/modal";
import Modalcontent from "./pizzaBuilderModalContent";
import MultiShow from "./pizzaBuilderMultiShow";

class pizzaBuilderPropsSrc extends React.Component {
  state = {
    currentIngredient: "base",
    modalIsShow: false,
    smallPizza: false,
    redirect: false
  };

  changeSelectHandler = event => {
    this.setState(prevState => {
      return {
        currentIngredient: (prevState.currentIngredient =
          event.target.textContent)
      };
    });
  };

  toggleModalHandler = () => {
    this.setState((prevState, props) => {
      return { modalIsShow: !prevState.modalIsShow };
    });
  };

  checkoutHandler = () => {
    if (Object.keys(this.props.multi.pizzas).length > 0) {
      this.addPizzaHandler();
    }
    this.props.state.weight > 500 ||
    Object.keys(this.props.multi.pizzas).length > 0
      ? this.setState({ redirect: true })
      : this.setState({ smallPizza: true, modalIsShow: false });
  };

  addPizzaHandler = () => {
    let newIngredients = {};
    Object.keys(this.props.state.ingredients).map(item => {
      if (this.props.state.ingredients[item].count !== 0)
        newIngredients[item] = { ...this.props.state.ingredients[item] };
    });
    let curPizza = {
      cost: this.props.state.cost,
      diameter: this.props.state.diameter,
      weight: this.props.state.weight,
      ingredients: newIngredients
    };
    if (curPizza.weight >= 500) {
      this.setState({ modalIsShow: false });
      this.props.multipleAddFun(curPizza);
    } else {
      this.setState({ smallPizza: true, modalIsShow: false });
    }
  };

  minusFunHandler = event => {
    console.log("in", event);
  };

  render() {
    return (
      <Cover>
        <CSSTransition
          in={this.state.modalIsShow}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div
            className="modal__background"
            onClick={this.toggleModalHandler}
          ></div>
        </CSSTransition>
        <CSSTransition
          in={this.state.modalIsShow}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <Modal>
            <Modalcontent
              cost={this.props.state.cost}
              diameter={this.props.state.diameter}
              message={this.props.state.message}
              weight={this.props.state.weight}
              ingredients={this.props.state.ingredients}
              minus={this.props.minusFun}
              checkout={this.checkoutHandler}
              add={this.addPizzaHandler}
            />
          </Modal>
        </CSSTransition>
        <CSSTransition
          in={this.state.smallPizza}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ smallPizza: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Too small pizza, need more ingredients...
            </div>
          </div>
        </CSSTransition>
        {this.state.redirect ? <Redirect to="/checkout" /> : null}
        <div className="pizza__view__cover">
          <div className="pizza__buttons__cover">
            <UlSelect
              ingredients={this.props.state.ingredients}
              change={this.changeSelectHandler}
            />
            <PizzaBuilderControls
              name={this.state.currentIngredient}
              weight={
                this.props.state.ingredients[this.state.currentIngredient]
                  .weight
              }
              count={
                this.props.state.ingredients[this.state.currentIngredient].count
              }
              plus={this.props.plusFun}
              minus={this.props.minusFun}
            />
            <OrderControls
              toggleModal={this.toggleModalHandler}
              resetBuild={this.props.resetFun}
              resetMultiBuild={this.props.resetMultiFun}
            />
            <MultiShow
              pizzas={this.props.multi.pizzas}
              cost={this.props.multi.totalCost}
              minus={this.minusFunHandler}
              delete={this.props.deleteMulriOrderFun}
            />
          </div>
          <PizzaBuilderPizza
            ingredients={this.props.state.ingredients}
            weight={this.props.state.weight}
            minus={this.props.minusFun}
            cost={this.props.state.cost}
            diameter={this.props.state.diameter}
            message={this.props.state.message}
          />
        </div>
      </Cover>
    );
  }
}

const stateToProps = state => {
  return {
    state: state.pizza,
    multi: state.multi
  };
};

const dispatchToProps = dispatch => {
  return {
    plusFun: ingredient => dispatch(plus(ingredient)),
    minusFun: ingredient => dispatch(minus(ingredient)),
    resetFun: () => dispatch(reset_build()),
    multipleAddFun: data => dispatch(multipleAdd(data)),
    deleteMulriOrderFun: num => dispatch(deleteMultiOrder(num)),
    resetMultiFun: () => dispatch(resetMultiPizza())
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(pizzaBuilderPropsSrc);
