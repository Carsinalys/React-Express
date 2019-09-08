import React from "react";
import { connect } from "react-redux";
import { getReviews, editReview } from "../../AC/index";
import Modal from "../hoc/modal";

import ShowReviews from "./pizzaBuilderShowReviews";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";

class Reviews extends React.Component {
  componentDidMount() {
    this.props.getReviews("?page=1&limit=5");
  }

  state = {
    currentPage: 1
  };

  currentPageHandler = num => {
    this.setState({ currentPage: num });
  };

  render() {
    return (
      <div className="container reviews_container">
        <Modal toggle={this.props.isLoading}>
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
    editReviewFun: id => dispatch(editReview(id))
  };
};

export default connect(
  stateToProps,
  dispatchToProps
)(Reviews);
