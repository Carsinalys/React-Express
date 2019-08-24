import React from "react";
import { connect } from "react-redux";
import { getReviews } from "../../AC/index";
import { CSSTransition } from "react-transition-group";

import ShowReviews from "./pizzaBuilderShowReviews";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";

class Reviews extends React.Component {
  componentDidMount() {
    this.props.getReviews();
  }

  state = {
    currentReviews: {},
    currentPage: 1
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.reviews.reviews != this.props.reviews.reviews) {
      let newObj = {};
      Object.keys(this.props.reviews.reviews).map((item, index) => {
        if (index < 5) newObj[item] = this.props.reviews.reviews[item];
      });
      console.log(newObj);
      this.setState({ currentReviews: newObj });
    }
  }

  changePageHandler = num => {
    let newObj = {};
    Object.keys(this.props.reviews.reviews).map((item, index) => {
      if (index < 5 * num && index >= 5 * (num - 1))
        newObj[item] = this.props.reviews.reviews[item];
    });
    this.setState({ currentReviews: newObj, currentPage: num });
  };

  render() {
    return (
      <div className="container reviews_container">
        <CSSTransition
          in={this.props.isLoading}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Spinner />
          </div>
        </CSSTransition>
        {this.props.getReviews ? (
          <ShowReviews
            reviews={this.state.currentReviews}
            auth={this.props.auth.isAuthindicated}
            pagination={this.props.reviews.pagination}
            changePage={this.changePageHandler}
            currentPageNum={this.state.currentPage}
          />
        ) : null}
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    isLoading: state.reviews.isLoading,
    getReviews: state.reviews.getReviews,
    reviews: state.reviews,
    auth: state.auth
  };
};

const dispatchToProps = dispatch => {
  return {
    getReviews: () => dispatch(getReviews())
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Reviews);
