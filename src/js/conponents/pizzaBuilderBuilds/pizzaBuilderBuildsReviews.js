import React from "react";

const buildsReviews = props => {
  return (
    <div className="builds__reviews__block__cover">
      <div>reviews</div>
      {props.auth.isAuthindicated ? (
        <span
          className="builds__add__review__btn"
          onClick={() => {
            props.modal();
            props.setId(props.id);
          }}
        >
          Write review
        </span>
      ) : null}
    </div>
  );
};

export default buildsReviews;
