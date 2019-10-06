import React from "react";
import { NavLink } from "react-router-dom";

import Burger from "../../icons/burger";

const pizzaNav = props => {
  return (
    <div className="pizza__nav">
      <div className="pizza__nav__burger" onClick={props.showClick}>
        <Burger />
      </div>
      <nav className="nav">
        {props.show ? (
          <div className="modal__background" onClick={props.showClick}></div>
        ) : null}

        <ul
          className={
            props.show
              ? "pizza__nav__list pizza__nav__list_active"
              : "pizza__nav__list"
          }
          onClick={props.hideModal}
        >
          <li className="pizza__nav__item">
            <NavLink to="/" exact className="pizza__nav__link">
              Main page
            </NavLink>
          </li>
          <li className="pizza__nav__item">
            <NavLink to="/pizza-builds" className="pizza__nav__link">
              Ready pizzas
            </NavLink>
          </li>
          <li className="pizza__nav__item">
            <NavLink to="/pizza-builder" className="pizza__nav__link">
              Pizza builder
            </NavLink>
          </li>
          <li className="pizza__nav__item">
            <NavLink to="/reviews/1" className="pizza__nav__link">
              Reviews
            </NavLink>
          </li>
          {props.auth.isAuthindicated ? (
            <li className="pizza__nav__item">
              <NavLink to="/checkout" className="pizza__nav__link">
                Card & Checkout
              </NavLink>
            </li>
          ) : null}
          {props.auth.isAuthindicated ? (
            <li className="pizza__nav__item">
              <NavLink to="/logOut" className="pizza__nav__link">
                LogOut
              </NavLink>
            </li>
          ) : (
            <li className="pizza__nav__item">
              <NavLink to="/authentication" className="pizza__nav__link">
                Authentication
              </NavLink>
            </li>
          )}
          {props.auth.isAuthindicated ? (
            <li className="pizza__nav__item">
              <NavLink to="/personalRoom" className="pizza__nav__link">
                <div className="log__out__cover">
                  <div className="log__out__name__block">
                    <p>
                      {props.auth.name !== "undefined"
                        ? props.auth.name
                        : "user"}
                    </p>
                  </div>
                  <div className="log__out__image__block">
                    <img
                      src={
                        props.auth.photo.startsWith("data")
                          ? `${props.auth.photo}`
                          : `/assets/users/${props.auth.photo}`
                      }
                      alt={props.auth.name}
                      className="log__out__image"
                    />
                  </div>
                </div>
              </NavLink>
            </li>
          ) : null}
          {props.auth.isAuthindicated ? (
            <li className="pizza__nav__item">
              <NavLink
                to="/chat"
                className={
                  props.chat.newMessage && props.location !== "/chat"
                    ? "pizza__nav__link pizza__nav__link__active"
                    : "pizza__nav__link"
                }
              >
                Chat
              </NavLink>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(pizzaNav);
