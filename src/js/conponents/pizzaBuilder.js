import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import PizzaHeader from "./pizzaHeader/pizzaHeder";
import AddReview from "./pizzaReviews/pizzaReviewsAddReview";
import PizzaBuilderMainPage from "./pizzaBuilderMain/pizzaBuilderMain";
import Authendication from "./pizzaBuilderAuth/pizzaBuilderAuth";
import AuthendicationSignUp from "./pizzaBuilderAuth/pizzaBuilderAuthSignUp";
import LogOut from "./pizzaBuilderLogOut/pizzaBuilderLogOut";
import Forgot from "./pizzaBuilderAuth/pizzaBuilderAuthForgot";
import ChangeMail from "./pizzaBuildreCabinet/pizzaBuilderCabinetChangeMail";
import Page404 from "./pizzaBuilder404/pizzaBuilder404";

const BuldsLazy = React.lazy(() =>
  import("./pizzaBuilderBuilds/pizzaBuilderBuilds")
);
const ChatLazy = React.lazy(() =>
  import("./pizzaBuilderChat/pizzaBuilderChat")
);
const CabinetLazy = React.lazy(() =>
  import("./pizzaBuildreCabinet/pizzaBuilderCabinet")
);
const PizzaBuilderLazy = React.lazy(() =>
  import("./pizzaBuilder/pizzaBuilderPropsSrc")
);
const CheckoutLazy = React.lazy(() =>
  import("./pizzaBuilderCheckout/pizzaBuilderCheckout")
);
const ReviewsLazy = React.lazy(() =>
  import("./pizzaReviews/pizzaBuilderReviews")
);

class PizzaApp extends React.Component {
  render() {
    return (
      <>
        <Route path="/" component={PizzaHeader} />
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route exact path="/" component={PizzaBuilderMainPage} />
            <Route exact path="/pizza-builder" component={PizzaBuilderLazy} />
            <Route exact path="/reviews/addReview" component={AddReview} />
            <Route exact path="/reviews/:page" component={ReviewsLazy} />
            <Route exact path="/checkout" component={CheckoutLazy} />
            <Route exact path="/authentication" component={Authendication} />
            <Route exact path="/personalRoom" component={CabinetLazy} />
            <Route
              exact
              path="/personalRoom/changeMail"
              component={ChangeMail}
            />
            <Route exact path="/personalRoom/:page" component={CabinetLazy} />
            <Route exact path="/pizza-builds" component={BuldsLazy} />
            <Route exact path="/authentication/forgot" component={Forgot} />
            <Route exact path="/logOut" component={LogOut} />
            <Route
              exact
              path="/authentication/registration"
              component={AuthendicationSignUp}
            />
            <Route exact path="/chat" component={ChatLazy} />
            <Route component={Page404} />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default PizzaApp;
