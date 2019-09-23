import React from "react";
import { Route, Redirect } from "react-router-dom";

import PizzaHeader from "./pizzaHeader/pizzaHeder";
import PizzaBuilderPropsSrc from "./pizzaBuilder/pizzaBuilderPropsSrc";
import Cover from "./hoc/cover";
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
import Chat from "./pizzaBuilderChat/serverPizzaBuilderChat";

class PizzaApp extends React.Component {
  render() {
    return (
      <Cover>
        <Route path="/" component={PizzaHeader} />
        <Route path="/" exact component={PizzaBuilderMainPage} />
        <Route path="/pizza-builder" component={PizzaBuilderPropsSrc} />
        <Route path="/reviews" exact component={Reviews} />
        <Route path="/reviews/addReview" component={AddReview} />
        <Route path="/checkout" component={PizzaBuilderCheckout} />
        <Route path="/authentication" exact component={Authendication} />
        <Route path="/personalRoom" component={Cabinet} />
        <Route path="/pizza-builds" component={ReadyBuilds} />
        <Route exact path="/chat" component={Chat} />
        <Route
          path="/authentication/registration"
          component={AuthendicationSignUp}
        />
        <Route path="/authentication/forgot" component={Forgot} />
        <Route path="/logOut" component={LogOut} />
        <Route component={PizzaBuilderMainPage} />
      </Cover>
    );
  }
}

export default PizzaApp;
