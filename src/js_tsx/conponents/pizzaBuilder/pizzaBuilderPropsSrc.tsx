import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

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
import ModalBuilder from "../hoc/modalBuilder";
import Modalcontent from "./pizzaBuilderModalContent";
import MultiShow from "./pizzaBuilderMultiShow";
import Modal from "../hoc/modal";

import { InitState, Ingredients } from '../../reducer/pizzaState';
import { InitStateMulti } from '../../reducer/multipleOrder';
import { NewPizza, NewIngredients } from "../../interfaces/interfaces";
import { Dispatch } from "redux";

interface Props {
  browser: {
    safari: boolean;
  }
  state: InitState;
  multi: InitStateMulti;
  multipleAddFun: (data: NewPizza)=> void;
  minusFun: (name: string) => {
    type: string;
    payload: string;
  }
  plusFun: (name: string) => {
    type: string;
    payload: string;
  }
  resetFun: () => {
    type: string
  }
  resetMultiFun: () => {
    type: string
  }
  deleteMulriOrderFun: (num: number) => {
    type: string;
    payload: number;
  }
}

interface State {
  currentIngredient: Ingredients;
  modalIsShow: boolean;
  smallPizza: boolean;
  redirect: boolean;
}

class pizzaBuilderPropsSrc extends React.Component<Props, State> {
  state: State = {
    currentIngredient: "base",
    modalIsShow: false,
    smallPizza: false,
    redirect: false
  };

  changeSelectHandler = (name: Ingredients) => {
    this.setState(() => {
        return {currentIngredient: name};
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
    let newIngredients: NewIngredients = {};
    Object.keys(this.props.state.ingredients).map(item => {
      const curItem = item as Ingredients
      if (this.props.state.ingredients[curItem]!.count !== 0)
        newIngredients[curItem] = { ...this.props.state.ingredients[curItem] };
    });
    let curPizza: NewPizza = {
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

  minusFunHandler = (name: string) => {
    console.log("in", name);
  };

  render() {
    return (
      <Cover>
        <Modal toggle={this.state.modalIsShow}>
          <div
            className="modal__background"
            onClick={this.toggleModalHandler}
          ></div>
        </Modal>
        <Modal toggle={this.state.modalIsShow}>
          <ModalBuilder>
            <Modalcontent
              cost={this.props.state.cost}
              diameter={this.props.state.diameter}
              message={this.props.state.message}
              weight={this.props.state.weight}
              ingredients={this.props.state.ingredients}
              minus={this.props.minusFun}
              checkout={this.checkoutHandler}
              add={this.addPizzaHandler}
              browser={this.props.browser}
            />
          </ModalBuilder>
        </Modal>
        <Modal toggle={this.state.smallPizza}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ smallPizza: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Too small pizza, need more ingredients...
            </div>
          </div>
        </Modal>
        {this.state.redirect ? <Redirect to="/checkout" /> : null}
        <div className="pizza__view__cover">
          <div className="pizza__buttons__cover">
            <UlSelect
              ingredients={this.props.state.ingredients}
              change={this.changeSelectHandler}
              browser={this.props.browser}
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
              browser={this.props.browser}
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
            browser={this.props.browser}
          />
        </div>
      </Cover>
    );
  }
}

const stateToProps = (state: any) => {
  return {
    state: state.pizza,
    multi: state.multi,
    browser: state.browser
  };
};

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    plusFun: (ingredient: string) => dispatch(plus(ingredient)),
    minusFun: (ingredient: string) => dispatch(minus(ingredient)),
    resetFun: () => dispatch(reset_build()),
    multipleAddFun: (data: NewPizza) => dispatch(multipleAdd(data)),
    deleteMulriOrderFun: (num: number) => dispatch(deleteMultiOrder(num)),
    resetMultiFun: () => dispatch(resetMultiPizza())
  };
};

export default connect(stateToProps, dispatchToProps)(pizzaBuilderPropsSrc);
