import React from "react";
import { connect } from "react-redux";
import { fetchResetPass, authResetOnInput } from "../../AC/index";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import { CSSTransition } from "react-transition-group";

class ForgotPass extends React.Component {
  resetHandler = e => {
    e.preventDefault();
    if (this.props.authReset.inputs.mail.isValid)
      this.props.fetchResetFun(this.props.authReset.inputs.mail.value);
  };

  backHandler = () => {
    this.props.history.push("/authentication");
  };

  render() {
    return (
      <div className="container">
        <CSSTransition
          in={this.props.authReset.modal}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Spinner />
          </div>
        </CSSTransition>
        <button onClick={this.backHandler} className="auth__forgot__back">
          Back
        </button>
        <div className="auth__forgot">
          <CSSTransition
            in={this.props.authReset.message}
            timeout={300}
            classNames="modal__global"
            mountOnEnter
            unmountOnExit
          >
            <h2>Check your email to prossed changing password...</h2>
          </CSSTransition>
          <form action="#" id="forgot">
            <div>
              <label htmlFor="forgot__name">
                Enter your email:
                <input
                  type="text"
                  form="forgot"
                  id="forgot__name"
                  className={
                    this.props.authReset.inputs.mail.isValid
                      ? "forgot__input"
                      : "forgot__input forgot__input_error"
                  }
                  placeholder="Email"
                  value={this.props.authReset.inputs.mail.value}
                  onChange={event => this.props.authResetOnInputFun(event)}
                />
              </label>
            </div>
            <div className="auth__reset__btn__cover">
              <button
                type="submit"
                form="forgot"
                onClick={e => this.resetHandler(e)}
                className="auth__reset__btn"
              >
                Reset password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    auth: state.auth,
    authReset: state.authReset
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchResetFun: mail => dispatch(fetchResetPass(mail)),
    authResetOnInputFun: event => dispatch(authResetOnInput(event))
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(ForgotPass);
