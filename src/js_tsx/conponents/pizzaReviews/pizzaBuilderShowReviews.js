import React, { useState } from "react";
import { Link, Redirect, NavLink } from "react-router-dom";

import Star from "../../icons/star";
import StarEmpty from "../../icons/starEmpty";
import Modal from "../hoc/modal";

const showReviews = props => {
  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);

  let markup = () => {
    let pagination = [];
    for (let i = 0; i < props.pagination; i++) {
      let path = `/reviews/${i + 1}`;
      pagination.push(
        <NavLink
          to={path}
          key={i}
          onClick={() => {
            props.changePage(`page=${i + 1}&limit=5`);
            props.changeCurPage(i + 1);
          }}
          className={
            props.currentPageNum == i + 1
              ? "pagination__item pagination__item_active"
              : "pagination__item"
          }
        >
          {i + 1}
        </NavLink>
      );
    }
    return pagination;
  };

  function getRating(item) {
    let stars = [];
    let counter = 0;
    for (let i = 0; i < 5; i++) {
      if (counter < +item.rating) {
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
      <Modal toggle={modal}>
        <div className="modal__delete">
          <div className="modal__delete__cover">
            <div>
              <h3>Are you shure?</h3>
            </div>
            <div className="modal__delete__buttons__cover">
              <button
                className="modal__delete__button"
                onClick={() => {
                  props.removeReview(id);
                  setModal(false);
                }}
              >
                Yes
              </button>
              <button
                className="modal__delete__button"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Modal>
      <div className="reviews__cover__global">
        {props.reviews.map(item => {
          return (
            <section className="review" key={item._id}>
              {props.id === item.id ? (
                <span
                  className="reviews__edit_btn"
                  data-id={item._id}
                  onClick={event => props.edit(event.target.dataset.id)}
                >
                  edit
                </span>
              ) : null}
              {props.id === item.id ? (
                <span
                  className="reviews__edit_btn"
                  data-id={item._id}
                  onClick={event => {
                    setModal(true);
                    setId(event.target.dataset.id);
                  }}
                >
                  delete
                </span>
              ) : null}
              <div className="review__head">
                <p className="review__author">{item.name}</p>
                <p className="review__rating">{getRating(item)}</p>
                <p className="review__date">{item.date.split("T")[0]}</p>
              </div>
              <div className="review__body">
                <p className="review__text">{item.text}</p>
              </div>
            </section>
          );
        })}
      </div>
      {<div className="pagination__list">{markup()}</div>}
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
