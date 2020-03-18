import React from "react";
import { InitStateAuth } from '../../reducer/pizzaAuth';
import { Review_Build, Review } from '../../interfaces/interfaces';

interface Props {
  auth: InitStateAuth;
  reviews: Review_Build[] | undefined;
  modal: (data: string | undefined) => void;
  id: string | undefined;
  setId: (id: string) => void;
  showReviews: (data: Review[]) => {
    type: string;
    payload: Review[];
  }
  showReviewsModal: ()=>void;
}

const buildsReviews: React.FC<Props> = props => {
  const curRating = () => {
    let ratingSum: number = 0;
    if (props.reviews) {
      props.reviews.map(item => (ratingSum = ratingSum + item.rating));
      return Math.round(ratingSum / props.reviews.length);
    } else {
      ratingSum
    }
  };
  const ids = props.reviews ? props.reviews.map(item => item.user) : [];
  const stars = () => {
    const count = 5;
    const fullStars = curRating();
    const markup = [];
    for (let i = 0; i < count; i++) {
      if (i < fullStars!) {
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
    <div className="builds__reviews__block__cover">
      <div
        className="builds__review__preview__cover"
        onClick={() => {
          const newReviews = [...props.reviews] as unknown as Review[];
          props.showReviews(newReviews);
          props.showReviewsModal();
        }}
      >
        <div className="builds__review__preview__stars__cover">{stars()}</div>{" "}
        <span className="builds__review__preview__count">
          ({props.reviews!.length})
        </span>
      </div>
      {props.auth.isAuthindicated && ids.includes(props.auth.localId!) ? (
        <span
          className="builds__add__review__btn"
          onClick={() => {
            props.modal("edit");
            props.setId(props.id!);
          }}
        >
          Edit review
        </span>
      ) : props.auth.isAuthindicated ? (
        <span
          className="builds__add__review__btn"
          onClick={() => {
            props.modal(undefined);
            props.setId(props.id!);
          }}
        >
          Write review
        </span>
      ) : null}
    </div>
  );
};

export default buildsReviews;
