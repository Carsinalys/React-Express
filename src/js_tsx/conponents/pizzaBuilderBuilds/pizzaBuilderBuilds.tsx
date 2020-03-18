import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ModalBuilder from "./pizzaBuilderModal";
import Ingredients from "../pizzaBuilder/pizzaBuilderIconsIngredients";
import {
  multipleAdd,
  getBuilds,
  sendReview,
  sendEditedReview,
  setCurReviewsToShow
} from "../../AC/index";
import Modal from "../hoc/modal";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Reviews from "./pizzaBuilderBuildsReviews";
import ReviewsModal from "./pizzaBuilderReviewModal";
import ReviewsModalShow from "./pizzaBuilderReviewsModalShow";
import { Dispatch } from "redux";
import { InitStateAuth } from '../../reducer/pizzaAuth';
import { InitStateBuilds } from '../../reducer/readyBuilds';
import { NewPizza, BuildsReviewsInput, Review, Pizza, Review_Build } from '../../interfaces/interfaces';

interface Props {
  auth: InitStateAuth;
  builds: InitStateBuilds;
  browser: {
    safari: boolean;
  }
  getBuildsFun: ()=>any;
  sendEditedReviewFun: (data: BuildsReviewsInput) => any;
  sendReviewFun: (data: BuildsReviewsInput) => any;
  addFun: (data: Pizza)=>any;
  setCurReviewsToShowFun: (data: Review[]) => {
    type: string;
    payload: Review[];
  }
}

interface State {
  modalIsShow: boolean;
    selectedItem: Pizza | undefined;
    redirect: boolean;
    minusModal: boolean;
    reviewModal: boolean;
    reviewModalEdit: boolean;
    curBuildModalId: string;
    reviewsModalShow: boolean;
}

class Builds extends React.Component<Props, State> {
  componentDidMount() {
    this.handleScroll();
    document.addEventListener("scroll", this.handleScroll);
    this.props.getBuildsFun();
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevProps.builds.builds.length !== this.props.builds.builds.length) {
      this.handleScroll();
    }
  }

  state = {
    modalIsShow: false,
    selectedItem: undefined,
    redirect: false,
    minusModal: false,
    reviewModal: false,
    reviewModalEdit: false,
    curBuildModalId: "",
    reviewsModalShow: false
  };

  minusHandler = () => {
    this.setState({ minusModal: true });
  };

  toggleModalHandler = () => {
    this.setState({ modalIsShow: false });
  };

  redirectHandler = () => {
    this.setState({ redirect: true });
  };

  handleScroll = () => {
    const items = document.querySelectorAll(".ready__build__cover") as NodeListOf<HTMLElement>;
    const pics = document.querySelectorAll(".ready__build__single__pic") as NodeListOf<HTMLElement>;
    items.forEach((item, index) => {
      if (
        document.documentElement.scrollTop >=
        item.offsetTop - item.offsetHeight * 3
      ) {
        pics[index].classList.add("ready__build__single__pic_active");
      }
    });
  };

  toggleReviewModalHandler = (editTrigger: string | undefined) => {
    this.setState(prevState => ({
      reviewModal: !prevState.reviewModal,
      reviewModalEdit: false
    }));
    if (editTrigger === "edit") {
      this.setState(prevState => ({
        reviewModalEdit: !prevState.reviewModalEdit
      }));
    }
  };

  curBuildModalIdHandler = (id: string) => {
    this.setState({ curBuildModalId: id });
  };

  sendReviewHandler = (data: Review_Build, edit: boolean) => {
    const review = { ...data } as unknown as BuildsReviewsInput;
    review.user = this.props.auth.localId!;
    review.build = this.state.curBuildModalId;
    edit
      ? this.props.sendEditedReviewFun(review)
      : this.props.sendReviewFun(review);
  };

  showReviewsIdModalHandler = () => {
    this.setState(prevState => ({
      reviewsModalShow: !prevState.reviewsModalShow
    }));
  };

  render() {
    return (
      <section className="ready__builds__main__cover">
        {this.state.redirect ? <Redirect to="/checkout" /> : null}
        <Modal toggle={this.props.builds.isLoading}>
          <Spinner />
        </Modal>
        <Modal toggle={this.state.reviewsModalShow}>
          <div
            className="modal__background"
            onClick={this.showReviewsIdModalHandler}
          >
            <ReviewsModalShow reviews={this.props.builds.reviews} />
          </div>
        </Modal>
        <Modal toggle={this.state.modalIsShow}>
          <div className="modal__background" onClick={this.toggleModalHandler}>
            <ModalBuilder
              add={this.props.addFun}
              redirect={this.redirectHandler}
              curPizza={this.state.selectedItem}
              builds={this.props.builds.builds}
            />
          </div>
        </Modal>
        <Modal toggle={this.state.reviewModal}>
          <div
            className="modal__background"
            onClick={() => this.toggleReviewModalHandler(undefined)}
          >
            <ReviewsModal
              modal={this.toggleReviewModalHandler}
              send={this.sendReviewHandler}
              edit={this.state.reviewModalEdit}
            />
          </div>
        </Modal>
        <Modal toggle={this.state.minusModal}>
          <div
            className="modal__background"
            onClick={() => this.setState({ minusModal: false })}
          >
            <div className="info__modal__cover">
              <div className="info__modal__title">
                <h1 className="info__modal__title__text">
                  You can`t delete ingredients from ready builds, but you can
                  build your own pizza in pizza builder...
                </h1>
              </div>
            </div>
          </div>
        </Modal>
        {this.props.builds.builds.length > 0 ? (
          this.props.builds.builds.map(item => {
            if (item.ingredients)
              return (
                <div key={item._id} className="ready__build__cover">
                  <h3 className="builds__pizza__title__text">
                    <span className="builds__pizza__title">{item.name}</span>
                  </h3>
                  <div className="ready__build__single__pic">
                    <img
                      src={
                        this.props.browser.safari
                          ? `assets/img/${item.name}.png`
                          : `assets/img/webp/${item.name}.webp`
                      }
                      alt={item.name as string}
                    />
                  </div>
                  <div className="single__build__ingredients__cover">
                    <Ingredients
                      ingredients={item.ingredients}
                      minus={this.minusHandler}
                      showCross="false"
                      browser={this.props.browser}
                    />
                  </div>
                  <div className="single__build__params__cover">
                    <div>
                      <p>Weigth is: {item.weight}g.</p>
                      <p>Cost is: {item.cost}$</p>
                      <p>Diameter is: {item.diameter}cm.</p>
                    </div>
                    <Reviews
                      auth={this.props.auth}
                      reviews={item.reviews}
                      modal={this.toggleReviewModalHandler}
                      id={item.id}
                      setId={this.curBuildModalIdHandler}
                      showReviews={this.props.setCurReviewsToShowFun}
                      showReviewsModal={this.showReviewsIdModalHandler}
                    />
                  </div>
                  <div className="single__build__order__cover">
                    <button
                      className="single__build__order"
                      onClick={() =>
                        this.setState({
                          modalIsShow: true,
                          selectedItem: item
                        })
                      }
                    >
                      Order
                    </button>
                  </div>
                </div>
              );
          })
        ) : (
          <h1>No builds yet</h1>
        )}
      </section>
    );
  }
}

const stateToProps = (state: any) => {
  return {
    builds: state.builds,
    auth: state.auth,
    browser: state.browser
  };
};

const dispatchToProps = (dispatch: Dispatch) => {
  return {
    addFun: (data: Pizza) => dispatch(multipleAdd(data)),
    getBuildsFun: () => dispatch(getBuilds()),
    sendReviewFun: (data: BuildsReviewsInput) => dispatch(sendReview(data)),
    sendEditedReviewFun: (data: BuildsReviewsInput) => dispatch(sendEditedReview(data)),
    setCurReviewsToShowFun: (data: Review[]) => dispatch(setCurReviewsToShow(data))
  };
};

export default connect(stateToProps, dispatchToProps)(Builds);
