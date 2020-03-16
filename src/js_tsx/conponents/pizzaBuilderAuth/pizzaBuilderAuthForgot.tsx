import React from "react";
import { connect } from "react-redux";
import { fetchResetPass, authResetOnInput } from "../../AC/index";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";
import { Dispatch } from "redux";
import { InitStateAuth } from '../../reducer/pizzaAuth';
import { InitStateReset } from '../../reducer/pizzaAuthReset';
import { ExtHistory } from '../../interfaces/interfaces';

interface Props {
  fetchResetFun: (mail: string) => any;
  authResetOnInputFun: (event: Event)=>{
    type: string;
    payload: Event;
  }
  auth: InitStateAuth;
  authReset: InitStateReset;
  history: ExtHistory
}

interface State {}

class ForgotPass extends React.Component<Props, State> {
  resetHandler = (e: Event) => {
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
                  onChange={(event) => {
                    const newEvent = event as unknown as Event;
                    this.props.authResetOnInputFun(newEvent)
                  }}
                />
              </label>
            </div>
            <div className="auth__reset__btn__cover">
              <button
                type="submit"
                form="forgot"
                onClick={e => {
                  const newEvent = e as unknown as Event;
                  this.resetHandler(newEvent);
                }}
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

const stateToProps = (state: any) => {
  return {
    auth: state.auth,
    authReset: state.authReset
  };
};

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchResetFun: (mail: string) => dispatch(fetchResetPass(mail)),
    authResetOnInputFun: (event: Event) => dispatch(authResetOnInput(event))
  };
};

export default connect(stateToProps, dispatchToProps)(ForgotPass);
