import React from "react";
import Input from "../pizzaBuilderCheckout/pizzaBuilderCheckoutInput";
import { authOnInput, authSignUp } from "../../AC/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";
import { Dispatch } from "redux";
import { InitState } from '../../reducer/pizzaState';
import { InitStateAuth } from '../../reducer/pizzaAuth';

interface Props {
  authSignUpFun: (mail: string, pass: string)=>any;
  authOnInputFun: (event: React.ChangeEvent<Element>) => {
    type: string;
    payload: React.ChangeEvent<Element>
  }
  inputs: InitStateAuth;
  pizza: InitState;
}

interface State {
  badMail: boolean;
  badPass: boolean;
}

class Authendication extends React.Component<Props, State> {
  state = {
    badMail: false,
    badPass: false
  };

  onSubmitHandler = (event: KeyboardEvent) => {
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
      this.props.authSignUpFun(
        this.props.inputs.inputs.mail.value,
        this.props.inputs.inputs.password.value
      );
    }
  };

  keyDownHandler = (event: KeyboardEvent) => {
    if (event.key === "Enter") this.onSubmitHandler(event);
  };

  render() {
    let redirect = <Redirect to="/" />;
    if (this.props.pizza.weight > 300) {
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
          <h3 className="auth__sign__in__title">Sign up:</h3>
          {this.props.inputs.error ? (
            <h4 className="auth__sign__in__title_error">
              {this.props.inputs.error}
            </h4>
          ) : null}
          <form
            action="#"
            id="signIn"
            onSubmit={(event: React.FormEvent) => {
              const newEvent = event as unknown as KeyboardEvent;
              this.onSubmitHandler(newEvent);
            }}
            onKeyDown={(event) => {
              const newEvent = event as unknown as KeyboardEvent;
              this.keyDownHandler(newEvent);
            }}
          >
            <Input
              inputs={this.props.inputs.inputs}
              changeHandler={this.props.authOnInputFun}
            />
            <div className="auth__sibmit__cover">
              <button type="submit" className="auth__submit">
                Sign up
              </button>
            </div>
            <div className="auth__link__cover">
              <NavLink to="/authentication" className="auth__link">
                Back to sign in
              </NavLink>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

const stateToProps = (state: any) => {
  return {
    inputs: state.auth,
    pizza: state.pizza
  };
};

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    authOnInputFun: (event: React.ChangeEvent<Element>) => dispatch(authOnInput(event)),
    authSignUpFun: (mail: string, pass: string) => dispatch(authSignUp(mail, pass))
  };
};

export default connect(stateToProps, dispatchToProps)(Authendication);
