import React from "react";
import { connect } from "react-redux";
import { fetchChangeEmail, authResetOnInput } from "../../AC/index";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";

class ForgotPass extends React.Component {
  resetHandler = e => {
    e.preventDefault();
    if (this.props.authReset.inputs.mail.isValid)
      this.props.fetchChangeEmailFun(
        this.props.authReset.inputs.mail.value,
        this.props.auth.localId,
        this.props.auth.token
      );
    this.props.history.push("/");
  };

  backHandler = () => {
    this.props.history.push("/personalRoom");
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
          Back to my room
        </button>
        <div className="auth__forgot">
          <Modal toggle={this.props.authReset.message}>
            <h2>Your email is must be changed...</h2>
          </Modal>
          <form action="#" id="forgot">
            <div>
              <label htmlFor="forgot__name">
                Enter your new email:
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
                Change email
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
    fetchChangeEmailFun: (mail, id, token) =>
      dispatch(fetchChangeEmail(mail, id, token)),
    authResetOnInputFun: event => dispatch(authResetOnInput(event))
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(ForgotPass);
