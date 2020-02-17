import React from "react";
import { connect } from "react-redux";
import { getReviews, editReview, deleteReview } from "../../AC/index";
import Modal from "../hoc/modal";
import { withRouter } from "react-router-dom";

import ShowReviews from "./pizzaBuilderShowReviews";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";

class Reviews extends React.Component {
  componentDidMount() {
    if (this.props.location.pathname.indexOf("/reviews/") >= 0) {
      const page = this.props.location.pathname.replace("/reviews/", "").trim();
      this.props.getReviews(`page=${page}&limit=5`);
      this.setState({ currentPage: page });
    } else this.props.getReviews("page=1&limit=5");
  }

  state = {
    currentPage: 1,
    modal: false
  };

  currentPageHandler = num => {
    this.setState({ currentPage: num });
  };

  deleteReviewHandler = id => {
    this.props.deleteReviewFun(id);
  };

  render() {
    return (
      <div className="container reviews_container">
        <Modal toggle={this.props.isLoading}>
          <Spinner />
        </Modal>
        <Modal toggle={this.props.reviews.modal}>
          <Spinner />
        </Modal>
        {this.props.getReviews ? (
          <ShowReviews
            reviews={this.props.reviews.reviews}
            auth={this.props.auth.isAuthindicated}
            pagination={this.props.reviews.pagination}
            changeCurPage={this.currentPageHandler}
            changePage={this.props.getReviews}
            currentPageNum={this.state.currentPage}
            edit={this.props.editReviewFun}
            removeReview={this.deleteReviewHandler}
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
    getReviews: param => dispatch(getReviews(param)),
    editReviewFun: id => dispatch(editReview(id)),
    deleteReviewFun: id => dispatch(deleteReview(id))
  };
};

export default withRouter(connect(stateToProps, dispatchToProps)(Reviews));
