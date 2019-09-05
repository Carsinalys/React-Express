import React from "react";
import { connect } from "react-redux";
import { getReviews } from "../../AC/index";
import Modal from "../hoc/modal";

import ShowReviews from "./pizzaBuilderShowReviews";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";

class Reviews extends React.Component {
  componentDidMount() {
    this.props.getReviews();
  }

  state = {
    currentReviews: [],
    currentPage: 1
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.reviews.reviews != this.props.reviews.reviews) {
      let newObj = {};
      this.props.reviews.reviews.map((item, index) => {
        if (index < 5) newObj[item._id.toString()] = item;
      });
      this.setState({ currentReviews: newObj });
    }
  }

  changePageHandler = num => {
    let newObj = {};
    this.props.reviews.reviews.map((item, index) => {
      if (index < 5 * num && index >= 5 * (num - 1))
        newObj[item._id.toString()] = item;
    });
    this.setState({ currentReviews: newObj, currentPage: num });
  };

  render() {
    return (
      <div className="container reviews_container">
        <Modal toggle={this.props.isLoading}>
          <Spinner />
        </Modal>
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
