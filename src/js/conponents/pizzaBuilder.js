import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Spinner from "./pizzaBuilder/pizzaBuilderSpinner";

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

const ChatLazyLoaded = React.lazy(() =>
  import("./pizzaBuilderChat/pizzaBuilderChat")
);

class PizzaApp extends React.Component {
  render() {
    return (
      <>
        <Route path="/" component={PizzaHeader} />
        <Switch>
          <Route path="/" exact component={PizzaBuilderMainPage} />
          <Route path="/pizza-builder" component={PizzaBuilderPropsSrc} />
          <Route path="/reviews" exact component={Reviews} />
          <Route path="/reviews/addReview" component={AddReview} />
          <Route path="/checkout" component={PizzaBuilderCheckout} />
          <Route path="/authentication" exact component={Authendication} />
          <Route path="/personalRoom" component={Cabinet} />
          <Route path="/pizza-builds" component={ReadyBuilds} />
          <Suspense
            fallback={
              <div className="modal__global">
                <Spinner />
              </div>
            }
          >
            <Route exact path="/chat" component={ChatLazyLoaded} />
          </Suspense>
          <Route
            path="/authentication/registration"
            component={AuthendicationSignUp}
          />
          <Route path="/authentication/forgot" component={Forgot} />
          <Route path="/logOut" component={LogOut} />
          <Route component={PizzaBuilderMainPage} />
        </Switch>
      </>
    );
  }
}

export default PizzaApp;
