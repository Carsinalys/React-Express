import React from "react";
import { Link } from "react-router-dom";

const pizzaLogo = props => {
  return (
    <div className="pizza__logo">
      <Link to="/">
        <img
          src={
            props.browser.safari
              ? `assets/img/logo.png`
              : `assets/img/webp/logo.webp`
          }
          alt="Pizza builder home"
          className="pizza__logo__pic"
        />
      </Link>
    </div>
  );
};

export default pizzaLogo;
