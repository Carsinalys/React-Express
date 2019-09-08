import React from "react";
import { Link, Redirect } from "react-router-dom";

import Star from "../../icons/star";
import StarEmpty from "../../icons/starEmpty";

const showReviews = props => {
  let markup = () => {
    let pagination = [];
    for (let i = 0; i < props.pagination; i++) {
      pagination.push(
        <li
          key={i}
          onClick={() => {
            props.changePage(`?page=${i + 1}&limit=5`);
            props.changeCurPage(i + 1);
          }}
          className={
            props.currentPageNum == i + 1
              ? "pagination__item pagination__item_active"
              : "pagination__item"
          }
        >
          {i + 1}
        </li>
      );
    }
    return pagination;
  };

  function getRating(item) {
    let stars = [];
    let counter = 0;
    for (let i = 0; i < 5; i++) {
      if (counter < +props.reviews[item].rating) {
        stars.push(<Star key={item + i} />);
        counter++;
      } else if (counter < 6) {
        stars.push(<StarEmpty key={item + i} />);
        counter++;
      }
    }
    return stars;
  }
  return (
    <div className="reviews__main__cover">
      <div className="reviews__cover__global">
        {Object.keys(props.reviews).map(item => {
          return (
            <section className="review" key={item}>
              {props.id === props.reviews[item].id ? (
                <span
                  className="reviews__edit_btn"
                  data-id={item}
                  onClick={event => props.edit(event)}
                >
                  edit
                </span>
              ) : null}
              <div className="review__head">
                <p className="review__author">{props.reviews[item].name}</p>
                <p className="review__rating">{getRating(item)}</p>
                <p className="review__date">
                  {props.reviews[item].date.split("T")[0]}
                </p>
              </div>
              <div className="review__body">
                <p className="review__text">{props.reviews[item].text}</p>
              </div>
            </section>
          );
        })}
      </div>
      {<ul className="pagination__list">{markup()}</ul>}
      {props.auth ? (
        <div className="review__add__btn__cover">
          <button className="review__add__btn">
            <Link to="/reviews/addReview">Add new review</Link>
          </button>
        </div>
      ) : null}
      {props.isEditMode ? <Redirect to="/reviews/addReview" /> : null}
    </div>
  );
};

export default showReviews;
