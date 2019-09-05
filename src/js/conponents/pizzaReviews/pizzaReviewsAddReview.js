import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";

import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";

class AddReview extends React.Component {
  state = {
    currentRating: 5,
    isLoading: false,
    badData: false
  };

  changeRatingHandler = rating => {
    this.setState({ currentRating: rating });
  };

  addReviewHandler = event => {
    event.preventDefault();
    let name = document.querySelector("#author__name"),
      text = document.querySelector("#author__text");
    if (name.value.length < 5) {
      this.setState({ badData: true });
    } else {
      this.setState({ badData: false });
    }
    if (name.value.length >= 5 && text.value.length >= 10) {
      this.setState({ isLoading: true });
      let data = {
        name: name.value,
        text: text.value,
        rating: this.state.currentRating,
        id: this.props.auth.localId
      };
      fetch(`/api/v1.0/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          name.value = "";
          text.value = "";
          this.setState({ currentRating: 5 });
          this.setState({ isLoading: false });
          console.log(response);
        })
        .catch(error => {
          this.setState({ isLoading: false });
          console.log(error);
        });
    }
  };

  render() {
    return (
      <section className="container add__form__container">
        <CSSTransition
          in={this.state.isLoading}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div>
            <Spinner />
          </div>
        </CSSTransition>
        <CSSTransition
          in={this.state.badData}
          timeout={300}
          classNames="modal__global"
          mountOnEnter
          unmountOnExit
        >
          <div
            className="pizza__view__order__small__modal"
            onClick={() => this.setState({ badData: false })}
          >
            <div className="pizza__view__order__small__modal__content">
              You need to fill all fields to complete or choose pizza correctly.
              Name must be at least 4 symbols length and comment 10 symbols...
            </div>
          </div>
        </CSSTransition>
        <h1 className="add__review__title">Add your review:</h1>
        <form action="#" id="add__review">
          <div className="author__name__cover">
            <label htmlFor="author__name">Enter your name:</label>
            <input
              type="text"
              id="author__name"
              form="add__review"
              minLength="5"
            />
          </div>
          <div className="author__rating__cover">
            <p>Your rating:</p>
            <div className="author__rating">
              <div
                className="add__review__star__cover"
                onClick={() => this.changeRatingHandler("1")}
              >
                <svg
                  className={
                    +this.state.currentRating > 0
                      ? "review__star__icon"
                      : "review__star__icon review__star__icon__inactive"
                  }
                  version="1.1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z" />
                </svg>
              </div>
              <div
                className="add__review__star__cover"
                onClick={() => this.changeRatingHandler("2")}
              >
                <svg
                  className={
                    +this.state.currentRating > 1
                      ? "review__star__icon"
                      : "review__star__icon review__star__icon__inactive"
                  }
                  version="1.1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z" />
                </svg>
              </div>
              <div
                className="add__review__star__cover"
                onClick={() => this.changeRatingHandler("3")}
              >
                <svg
                  className={
                    +this.state.currentRating > 2
                      ? "review__star__icon"
                      : "review__star__icon review__star__icon__inactive"
                  }
                  version="1.1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z" />
                </svg>
              </div>
              <div
                className="add__review__star__cover"
                onClick={() => this.changeRatingHandler("4")}
              >
                <svg
                  className={
                    +this.state.currentRating > 3
                      ? "review__star__icon"
                      : "review__star__icon review__star__icon__inactive"
                  }
                  version="1.1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z" />
                </svg>
              </div>
              <div
                className="add__review__star__cover"
                onClick={() => this.changeRatingHandler("5")}
              >
                <svg
                  className={
                    +this.state.currentRating > 4
                      ? "review__star__icon"
                      : "review__star__icon review__star__icon__inactive"
                  }
                  version="1.1"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="author__text__cover">
            <label htmlFor="author__text">Your comment:</label>
            <textarea
              name="author__text"
              id="author__text"
              cols="30"
              rows="10"
              className="author__text"
              minLength="10"
              maxLength="200"
            ></textarea>
          </div>
          <div className="submit__cover">
            <input
              type="submit"
              value="Add review"
              className="add__review__submit"
              onClick={event => this.addReviewHandler(event)}
            />
          </div>
        </form>
        <div className="add__form__back__btn__cover">
          <button className="add__form__back__btn">
            <Link to="/reviews">Back to reviews</Link>
          </button>
        </div>
      </section>
    );
  }
}

const stateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(stateToProps)(AddReview);
