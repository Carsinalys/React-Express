import React from "react";
import { connect } from "react-redux";
import { getReviews, editReview, deleteReview } from "../../AC/index";
import Modal from "../hoc/modal";
import { withRouter } from "react-router-dom";

import ShowReviews from "./pizzaBuilderShowReviews";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import { Dispatch } from "redux";
import { InitStateAuth } from '../../reducer/pizzaAuth';
import { InitStateReviews } from "../../reducer/fetchingReviews";

interface Props {
  getReviewsFun: (str: string) => any;
  editReviewFun: (str: string) => any;
  deleteReviewFun: (str: string) => any;
  auth: InitStateAuth;
  isLoading: boolean;
  getReviews: boolean;
  isEditMode: boolean;
  reviews: InitStateReviews;
  location: {
    pathname: string;
  }
}

interface State {
  currentPage: number;
  modal: boolean;
}

class Reviews extends React.Component<Props, State> {
  componentDidMount() {
    if (this.props.location.pathname.indexOf("/reviews/") >= 0) {
      const page = this.props.location.pathname.replace("/reviews/", "").trim();
      this.props.getReviewsFun(`page=${page}&limit=5`);
      this.setState({ currentPage: +page });
    } else this.props.getReviewsFun("page=1&limit=5");
  }

  state = {
    currentPage: 1,
    modal: false
  };

  currentPageHandler = (num: number) => {
    this.setState({ currentPage: num });
  };

  deleteReviewHandler = (id: string) => {
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
            changePage={this.props.getReviewsFun}
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

const stateToProps = (state: any) => {
  return {
    isLoading: state.reviews.isLoading,
    getReviews: state.reviews.getReviews,
    isEditMode: state.reviews.editMode,
    reviews: state.reviews,
    auth: state.auth
  };
};

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    getReviewsFun: (param: string) => dispatch(getReviews(param)),
    editReviewFun: (id: string) => dispatch(editReview(id)),
    deleteReviewFun: (id: string) => dispatch(deleteReview(id))
  };
};

export default withRouter(connect(stateToProps, dispatchToProps)(Reviews));
