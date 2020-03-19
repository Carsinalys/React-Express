import React from "react";
import { connect } from "react-redux";
import { fetchLogOut } from "../../AC/index";
import { Redirect } from "react-router";
import { InitStateAuth } from '../../reducer/pizzaAuth';
import { Dispatch } from "redux";

interface Props {
  auth: InitStateAuth;
  fetchLogOutFun: ()=>any;
}

class LogingOut extends React.Component<Props, {}> {
  render() {
    return (
      <section className="container">
        {this.props.auth.isAuthindicated ? (
          <div className="logOut__cover">
            <h1>Are you realy want to logOut?</h1>
            <button onClick={this.props.fetchLogOutFun} className="logOut__btn">
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

const stateToProps = (state: any) => {
  return {
    auth: state.auth
  };
};

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchLogOutFun: () => dispatch(fetchLogOut())
  };
};

export default connect(stateToProps, dispatchToProps)(LogingOut);
