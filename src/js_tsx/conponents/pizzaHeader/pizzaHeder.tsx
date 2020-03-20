import React from "react";
import { connect } from "react-redux";

import PizzaLogo from "./pizzaLogo";
import PizzaNav from "./pizzaNav";
import { InitStateAuth } from '../../reducer/pizzaAuth';
import { InitStateChat } from '../../reducer/chat';

interface Props {
  browser: {
    safari: boolean;
  }
  auth: InitStateAuth;
  chat: InitStateChat;
  location: {
    pathname: string
  };
}

interface State {
  burgerIsShow: boolean;
}

class PizzaHeader extends React.Component<Props,State> {
  state = {
    burgerIsShow: false
  };

  showMenuHandler = () => {
    this.setState(prevState => {
      return {
        burgerIsShow: !prevState.burgerIsShow
      };
    });
  };

  hideMenuHandler = () => {
    this.setState(prevState => {
      return {
        burgerIsShow: false
      };
    });
  };

  render() {
    return (
      <div className="pizza__header">
        <PizzaLogo browser={this.props.browser} />
        <PizzaNav
          show={this.state.burgerIsShow}
          showClick={this.showMenuHandler}
          auth={this.props.auth}
          hideModal={this.hideMenuHandler}
          chat={this.props.chat}
          location={this.props.location.pathname}
        />
      </div>
    );
  }
}

const stateToProps = (state: any) => {
  return {
    auth: state.auth,
    chat: state.chat,
    browser: state.browser
  };
};

export default connect(stateToProps)(PizzaHeader);
