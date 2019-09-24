import React from "react";
import { connect } from "react-redux";
import { fetchResetPass, authResetOnInput } from "../../AC/index";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";

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
        <Modal toggle={this.props.authReset.modal}>
          <div>
            <Spinner />
          </div>
        </Modal>
        <button onClick={this.backHandler} className="auth__forgot__back">
          Back
        </button>
        <div className="auth__forgot">
          <Modal toggle={this.props.authReset.message}>
            <h2>Check your email to prossed changing password...</h2>
          </Modal>
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
                  onChange={() => this.props.authResetOnInputFun(event)}
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
