import React from "react";
import { connect } from "react-redux";
import { getReviews, editReview, reviewsEditModeOn } from "../../AC/index";
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
            edit={this.props.editReviewFun}
            id={this.props.auth.localId}
            isEditMode={this.props.isEditMode}
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
    isEditMode: state.reviews.editMode,
    reviews: state.reviews,
    auth: state.auth
  };
};

const dispatchToProps = dispatch => {
  return {
    getReviews: () => dispatch(getReviews()),
    editReviewFun: id => dispatch(editReview(id)),
    reviewsEditModeOnFun: id => dispatch(reviewsEditModeOn(id))
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Reviews);
