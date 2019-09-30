import React from "react";
import { Route, Switch } from "react-router-dom";

import PizzaHeader from "./pizzaHeader/pizzaHeder";
import PizzaBuilderPropsSrc from "./pizzaBuilder/pizzaBuilderPropsSrc";
import Reviews from "./pizzaReviews/pizzaBuilderReviews";
import AddReview from "./pizzaReviews/pizzaReviewsAddReview";
import PizzaBuilderMainPage from "./pizzaBuilderMain/pizzaBuilderMain";
import PizzaBuilderCheckout from "./pizzaBuilderCheckout/pizzaBuilderCheckout";
import Authendication from "./pizzaBuilderAuth/pizzaBuilderAuth";
import AuthendicationSignUp from "./pizzaBuilderAuth/pizzaBuilderAuthSignUp";
import LogOut from "./pizzaBuilderLogOut/pizzaBuilderLogOut";
import Cabinet from "./pizzaBuildreCabinet/pizzaBuilderCabinet";
import Forgot from "./pizzaBuilderAuth/pizzaBuilderAuthForgot";
import ReadyBuilds from "./pizzaBuilderBuilds/pizzaBuilderBuilds";
import ChangeMail from "./pizzaBuildreCabinet/pizzaBuilderCabinetChangeMail";
import Chat from "./pizzaBuilderChat/pizzaBuilderChat";
import Page404 from "./pizzaBuilder404/pizzaBuilder404";

class PizzaApp extends React.Component {
  render() {
    return (
      <>
        <Route path="/" component={PizzaHeader} />
        <Switch>
          <Route exact path="/" component={PizzaBuilderMainPage} />
          <Route exact path="/pizza-builder" component={PizzaBuilderPropsSrc} />
          <Route exact path="/reviews/addReview" component={AddReview} />
          <Route exact path="/reviews/:page" component={Reviews} />
          <Route exact path="/checkout" component={PizzaBuilderCheckout} />
          <Route exact path="/authentication" component={Authendication} />
          <Route exact path="/personalRoom" component={Cabinet} />
          <Route exact path="/personalRoom/changeMail" component={ChangeMail} />
          <Route exact path="/personalRoom/:page" component={Cabinet} />
          <Route exact path="/pizza-builds" component={ReadyBuilds} />
          <Route exact path="/authentication/forgot" component={Forgot} />
          <Route exact path="/logOut" component={LogOut} />
          <Route
            exact
            path="/authentication/registration"
            component={AuthendicationSignUp}
          />
          <Route exact path="/chat" component={Chat} />
          <Route component={Page404} />
        </Switch>
      </>
    );
  }
}

export default PizzaApp;
