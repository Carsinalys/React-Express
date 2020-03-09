import React from "react";
import Input from "../pizzaBuilderCheckout/pizzaBuilderCheckoutInput";
import { authOnInput, authSignIn } from "../../AC/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import Modal from "../hoc/modal";

import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";

class Authendication extends React.Component {
  state = {
    badMail: false,
    badPass: false,
    checkbox: false
  };

  checkboxHandler = () => {
    this.setState(prevState => {
      return {
        checkbox: !prevState.checkbox
      };
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    if (
      !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
        this.props.inputs.inputs.mail.value
      )
    )
      this.setState({ badMail: true });
    else if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(
        this.props.inputs.inputs.password.value
      )
    )
      this.setState({ badPass: true });

    if (
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
        this.props.inputs.inputs.mail.value
      ) &&
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(
        this.props.inputs.inputs.password.value
      )
    ) {
      this.props.authSignInFun(
        this.props.inputs.inputs.mail.value,
        this.props.inputs.inputs.password.value,
        this.state.checkbox
      );
    }
  };

  keyDownHandler = event => {
    if (event.key === "Enter") this.onSubmitHandler(event);
  };

  render() {
    let redirect = <Redirect to="/" />;
    if (this.props.pizza.weight > 300 || this.props.multi.pizzas.length > 0) {
      redirect = <Redirect to="/checkout" />;
    }

    return (
      <section className="container">
        {this.props.inputs.isAuthindicated ? redirect : null}
        <Modal toggle={this.props.inputs.isLoading}>
          <div>
            <Spinner />
          </div>
        </Modal>
        <Modal toggle={this.state.badMail}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badMail: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              You must enter correct Email...
            </div>
          </div>
        </Modal>
        <Modal toggle={this.state.badPass}>
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badPass: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              Password must be at least 8 symbols and contains one capinal
              literal, one number minimum...
            </div>
          </div>
        </Modal>
        <div className="auth__cover">
          <h3 className="auth__sign__in__title">Sign in:</h3>
          {this.props.inputs.error ? (
            <h4 className="auth__sign__in__title_error">
              {this.props.inputs.error}
            </h4>
          ) : null}
          <form
            action="#"
            id="signIn"
            onSubmit={() => this.onSubmitHandler(event)}
            onKeyDown={() => this.keyDownHandler(event)}
          >
            <Input
              inputs={this.props.inputs.inputs}
              changeHandler={this.props.authOnInputFun}
            />
            <div className="auth__sign__in__stay__in">
              <input
                id="auth__stay__in"
                type="checkbox"
                onClick={this.checkboxHandler}
                className="auth__sign__in__stay__in__input"
              />
              <label htmlFor="auth__stay__in">stay authiticated for week</label>
            </div>
            <div className="auth__sibmit__cover">
              <button type="submit" className="auth__submit">
                Sign in
              </button>
            </div>
            <div className="auth__link__cover">
              <NavLink to="/authentication/registration" className="auth__link">
                Registration
              </NavLink>
              <NavLink to="/authentication/forgot" className="auth__link">
                forgot password
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const stateToProps = state => {
  return {
    inputs: state.auth,
    pizza: state.pizza,
    multi: state.multi
  };
};

const dispatchToProps = dispatch => {
  return {
    authOnInputFun: event => dispatch(authOnInput(event)),
    authSignInFun: (mail, pass, stayIn) =>
      dispatch(authSignIn(mail, pass, stayIn))
  };
};

export default connect(stateToProps, dispatchToProps)(Authendication);
