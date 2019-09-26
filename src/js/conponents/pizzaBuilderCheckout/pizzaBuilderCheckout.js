import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Modal from "../hoc/modal";

import {
  minus,
  onInput,
  getInfoAddresCheckout,
  deleteMultiOrder,
  callApiAddOrderr
} from "../../AC/index";

import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import CheckoutContent from "./pizzaBuilderCheckoutContent";

class PizzaBuilderCheckout extends React.Component {
  state = {
    smallPizza: false,
    badName: false,
    badPhone: false,
    badPizzaName: false,
    badHouse: false,
    badFlat: false,
    badStreet: false
  };

  componentDidMount() {
    this.props.getAddresFun(this.props.auth.localId);
  }

  confirmHandler = event => {
    event.preventDefault();
    let data = {};
    if (this.props.multi.pizzas.length > 0) {
      data = {
        name: this.props.inputs.inputs.name.value,
        phone: this.props.inputs.inputs.phone.value,
        pizzaName: this.props.inputs.inputs.pizza.value,
        street: this.props.inputs.inputs.street.value,
        house: this.props.inputs.inputs.house.value,
        flat: this.props.inputs.inputs.flat.value,
        pizzas: this.props.multi.pizzas,
        totalCost: this.props.multi.totalCost,
        id: this.props.auth.localId
      };
    } else {
      data = {
        name: this.props.inputs.inputs.name.value,
        phone: this.props.inputs.inputs.phone.value,
        pizzaName: this.props.inputs.inputs.pizza.value,
        street: this.props.inputs.inputs.street.value,
        house: this.props.inputs.inputs.house.value,
        flat: this.props.inputs.inputs.flat.value,
        cost: this.props.state.cost,
        weight: this.props.state.weight,
        diameter: this.props.state.diameter,
        ingredients: this.props.state.ingredients,
        id: this.props.auth.localId
      };
    }

    if (
      !/^[a-zA-Z][a-zA-Z0-9-_ .]{1,20}$/.test(
        this.props.inputs.inputs.name.value
      )
    ) {
      this.setState({ badName: true });
      return false;
    } else if (
      !/^(375|80)(29|25|44|33)([0-9]{3})([0-9]{2})([0-9]{2})$/.test(
        this.props.inputs.inputs.phone.value
      )
    ) {
      this.setState({ badPhone: true });
      return false;
    } else if (
      !/^[a-zA-Z0-9-_. ]{1,20}$/.test(this.props.inputs.inputs.pizza.value)
    ) {
      this.setState({ badPizzaName: true });
      return false;
    } else if (!/^[0-9]{1,4}$/.test(this.props.inputs.inputs.house.value)) {
      this.setState({ badHouse: true });
      return false;
    } else if (!/^[0-9]{1,4}$/.test(this.props.inputs.inputs.flat.value)) {
      this.setState({ badFlat: true });
      return false;
    } else if (
      !/^[0-9a-zA-Z -_.]{1,20}$/.test(this.props.inputs.inputs.street.value)
    ) {
      this.setState({ badStreet: true });
      return false;
    }

    if (
      (this.props.inputs.inputs.name.value !== "" &&
        this.props.inputs.inputs.phone.value !== "" &&
        this.props.inputs.inputs.pizza.value !== "" &&
        this.props.inputs.inputs.street.value !== "" &&
        this.props.inputs.inputs.house.value !== "" &&
        this.props.inputs.inputs.flat.value !== "" &&
        this.props.state.weight > 500) ||
      this.props.multi.pizzas.length > 0
    ) {
      this.props.callApiAddOrderrFun(data);
    } else {
      this.setState({ smallPizza: true });
    }
  };

  minusDeleteHandler = () => {
    console.log("minus delete handler");
  };

  render() {
    return (
      <section className="container">
        <Modal toggle={this.props.inputs.modalShow}>
          <div>
            <Spinner />
          </div>
        </Modal>
        <Modal toggle={this.state.smallPizza}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ smallPizza: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              You need to fill all fields to complete or choose pizza
              correctly...
            </div>
          </div>
        </Modal>
        <Modal toggle={this.state.badName}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badName: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Name must be 2-20 symbols length and first symbol must be
              letter...
            </div>
          </div>
        </Modal>
        <Modal toggle={this.state.badPhone}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badPhone: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Phone must look like 80 29 760 18 83 or 375 33 765 98 22, must be
              without spaces
            </div>
          </div>
        </Modal>
        <Modal toggle={this.state.badPizzaName}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badPizzaName: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Pizza name must be 2-20 symbols length
            </div>
          </div>
        </Modal>
        <Modal toggle={this.state.badHouse}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badHouse: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              House name must be 2-4 numbers length
            </div>
          </div>
        </Modal>
        <Modal toggle={this.state.badFlat}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badFlat: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Flat must be 2-4 numbers length
            </div>
          </div>
        </Modal>
        <Modal toggle={this.state.badStreet}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badStreet: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Street must be 2-20 symbols length
            </div>
          </div>
        </Modal>
        {this.props.auth.isAuthindicated ? (
          <CheckoutContent
            data={this.props.state}
            minus={this.props.minusFun}
            confirm={this.confirmHandler}
            inputs={this.props.inputs.inputs}
            changeHandler={this.props.onInputFun}
            multi={this.props.multi}
            delete={this.props.deleteMultiOrderFun}
            minusDlete={this.minusDeleteHandler}
          />
        ) : (
          <Redirect to="/authentication" />
        )}
      </section>
    );
  }
}

const stateToProps = state => {
  return {
    state: state.pizza,
    inputs: state.order,
    auth: state.auth,
    multi: state.multi
  };
};

const dispatchToProps = dispatch => {
  return {
    minusFun: ingredient => dispatch(minus(ingredient)),
    resetFun: () => dispatch(reset_build()),
    onInputFun: event => dispatch(onInput(event)),
    getAddresFun: (token, id) => dispatch(getInfoAddresCheckout(token, id)),
    deleteMultiOrderFun: num => dispatch(deleteMultiOrder(num)),
    callApiAddOrderrFun: data => dispatch(callApiAddOrderr(data))
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(PizzaBuilderCheckout);
