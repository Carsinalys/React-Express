import React, { useState } from "react";

const reviewsModal = props => {
  const [currentRating, setcurrentRating] = useState(3);
  const [nameValue, setnameValue] = useState(false);
  const [textValue, settextValue] = useState(false);
  const nameRegExp = new RegExp(/^[a-zA-Z][a-zA-Z0-9-_ .]{5,20}$/);
  const textRegExp = new RegExp(/^[a-zA-Z][a-zA-Z0-9-_ .,)(!?]{4,200}$/);
  const dataSend = () => {
    if (nameValue && textValue) {
      const name = document.querySelector("#builds__review__name").value;
      const text = document.querySelector("#builds__review__text").value;
      const data = {
        name: name,
        text: text,
        rating: currentRating
      };
      if (props.edit) {
        props.send(data, true);
        props.modal();
      } else {
        props.send(data);
        props.modal();
      }
    }
  };
  return (
    <div className="builds__modal__reviews__cover">
      <div
        className="builds__modal__reviews__add__cover"
        onClick={event => event.stopPropagation()}
      >
        <form
          action="#"
          id="builds__review__form"
          onSubmit={event => event.preventDefault()}
        >
          <div className="builds__modal__reviews__add__name__cover">
            <label htmlFor="builds__review__name">Enter your name:</label>
            <input
              onChange={event =>
                setnameValue(nameRegExp.test(event.target.value))
              }
              type="text"
              id="builds__review__name"
              placeholder="Name"
              className={
                nameValue
                  ? "builds__modal__reviews__add__name__input"
                  : "builds__modal__reviews__add__name__input builds__modal__reviews__add__name__input_error"
              }
            />
          </div>
          <div>
            <div>Rating:</div>
            <div className="author__rating">
              <div
                className="add__review__star__cover"
                onClick={() => setcurrentRating("1")}
              >
                <svg
                  className={
                    currentRating > 0
                      ? "build_review__star__icon"
                      : "build_review__star__icon build_review__star__icon__inactive"
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
                onClick={() => setcurrentRating("2")}
              >
                <svg
                  className={
                    currentRating > 1
                      ? "build_review__star__icon"
                      : "build_review__star__icon build_review__star__icon__inactive"
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
                onClick={() => setcurrentRating("3")}
              >
                <svg
                  className={
                    currentRating > 2
                      ? "build_review__star__icon"
                      : "build_review__star__icon build_review__star__icon__inactive"
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
                onClick={() => setcurrentRating("4")}
              >
                <svg
                  className={
                    currentRating > 3
                      ? "build_review__star__icon"
                      : "build_review__star__icon build_review__star__icon__inactive"
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
                onClick={() => setcurrentRating("5")}
              >
                <svg
                  className={
                    currentRating > 4
                      ? "build_review__star__icon"
                      : "build_review__star__icon build_review__star__icon__inactive"
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
          <div className="builds__modal__reviews__add__comment__cover">
            <label htmlFor="builds__review__text">Write your comment:</label>
            <textarea
              name="comment"
              id="builds__review__text"
              cols="30"
              rows="10"
              minLength="5"
              placeholder="Comment"
              className={
                textValue
                  ? "builds__modal__reviews__add__text"
                  : "builds__modal__reviews__add__text builds__modal__reviews__add__text_error"
              }
              onChange={event =>
                settextValue(textRegExp.test(event.target.value))
              }
            ></textarea>
          </div>
          <div className="builds__modal__reviews__add__btns__cover">
            <div className="builds__modal__reviews__add__btn__cover">
              <button
                className="builds__modal__reviews__add__btn"
                onClick={props.modal}
              >
                Cancel
              </button>
            </div>
            <div className="builds__modal__reviews__add__btn__cover">
              <button
                type="submit"
                className="builds__modal__reviews__add__btn"
                onClick={dataSend}
              >
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default reviewsModal;
