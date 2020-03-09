import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchChangeEmail, authChangeMailOnInput } from "../../AC/index";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";

class ForgotPass extends React.Component {
  changeMailHandler = e => {
    e.preventDefault();
    if (this.props.authReset.inputs.mail1.isValid) {
      this.props.fetchChangeEmailFun(
        this.props.authReset.inputs.mail1.value,
        this.props.auth.localId
      );
    }
  };

  backCabinetHandler = () => {
    this.props.history.push("/personalRoom");
  };

  render() {
    return (
      <div className="container">
        {this.props.auth.isAuthindicated ? null : <Redirect to="/" />}
        <Modal toggle={this.props.authReset.modal}>
          <div>
            <Spinner />
          </div>
        </Modal>
        <button
          onClick={this.backCabinetHandler}
          className="auth__forgot__back"
        >
          Back to my room
        </button>
        <div className="auth__forgot">
          <form action="#" id="chnageMail">
            <div>
              <label htmlFor="forgot__name">
                {this.props.cabinet.mailChangeError ? (
                  <h2>{this.props.cabinet.mailChangeError}</h2>
                ) : (
                  "Enter your new email:"
                )}
                <input
                  type="text"
                  form="chnageMail"
                  id="forgot__name"
                  className={
                    this.props.authReset.inputs.mail1.isValid
                      ? "forgot__input"
                      : "forgot__input forgot__input_error"
                  }
                  placeholder="Email"
                  value={this.props.authReset.inputs.mail1.value}
                  onChange={event => this.props.authChangeMailOnInputFun(event)}
                />
              </label>
            </div>
            <div className="auth__reset__btn__cover">
              <button
                type="submit"
                form="chnageMail"
                onClick={e => this.changeMailHandler(e)}
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
    authReset: state.authReset,
    cabinet: state.cabinet
  };
};

const dispatchToProps = dispatch => {
  return {
    fetchChangeEmailFun: (mail, id, token) =>
      dispatch(fetchChangeEmail(mail, id, token)),
    authChangeMailOnInputFun: event => dispatch(authChangeMailOnInput(event))
  };
};

export default connect(stateToProps, dispatchToProps)(ForgotPass);
