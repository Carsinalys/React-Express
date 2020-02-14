import React from "react";

const reviewsModalShow = props => {
  const ratingMarkup = num => {
    const count = 5;
    const markup = [];
    for (let i = 0; i < count; i++) {
      if (i < num) {
        markup.push(
          <div className="add__review__star__cover" key={i}>
            <svg
              className="build_review__star__icon"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z" />
            </svg>
          </div>
        );
      } else {
        markup.push(
          <div className="add__review__star__cover" key={i}>
            <svg
              className="build_review__star__icon build_review__star__icon__inactive"
              version="1.1"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.9,2.6l2.3,5c0.1,0.3,0.4,0.5,0.7,0.6l5.2,0.8C22,9,22.3,10,21.7,10.6l-3.8,3.9c-0.2,0.2-0.3,0.6-0.3,0.9   l0.9,5.4c0.1,0.8-0.7,1.5-1.4,1.1l-4.7-2.6c-0.3-0.2-0.6-0.2-0.9,0l-4.7,2.6c-0.7,0.4-1.6-0.2-1.4-1.1l0.9-5.4   c0.1-0.3-0.1-0.7-0.3-0.9l-3.8-3.9C1.7,10,2,9,2.8,8.9l5.2-0.8c0.3,0,0.6-0.3,0.7-0.6l2.3-5C11.5,1.8,12.5,1.8,12.9,2.6z" />
            </svg>
          </div>
        );
      }
    }
    return markup;
  };
  return (
    <div className="builds__modal__reviews__cover">
      <div
        className="builds__modal__reviews__add__cover"
        onClick={event => event.stopPropagation()}
      >
        <div className="builds__modal__reviews__show__cover">
          {props.reviews.length > 0 ? (
            props.reviews.map(item => (
              <div key={item.id} className="review__modal__show__cover">
                <div>
                  <p className="review__modal__show__title">{item.name}</p>
                </div>
                <div className="review__modal__show__rating__cover">
                  {ratingMarkup(item.rating)}
                </div>
                <div className="review__modal__show__text__cover">
                  <p className="review__modal__show__text">{item.text}</p>
                </div>
                <div className="review__modal__show__date__cover">
                  <p>{item.date.split("T")[0]}</p>
                </div>
              </div>
            ))
          ) : (
            <h1>No rewiews.</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default reviewsModalShow;
