import React from "react";
import { connect } from "react-redux";
import { logOut, fetchLogOut } from "../../AC/index";
import { Redirect } from "react-router";

class LogingOut extends React.Component {
  render() {
    return (
      <section className="container">
        {this.props.auth.isAuthindicated ? (
          <div className="logOut__cover">
            <h1>Are you realy want to logOut?</h1>
            <button
              onClick={() => {
                this.props.logOutFun();
                this.props.fetchLogOutFun();
              }}
              className="logOut__btn"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Redirect to="/" />
        )}
      </section>
    );
  }
}

const stateToProps = state => {
  return {
    auth: state.auth
  };
};

const dispatchToProps = dispatch => {
  return {
    logOutFun: () => dispatch(logOut()),
    fetchLogOutFun: () => dispatch(fetchLogOut())
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(LogingOut);
