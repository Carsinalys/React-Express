import React from "react";
import { Link } from "react-router-dom";

const pizzaLogo = () => {
  return (
    <div className="pizza__logo">
      <Link to="/">
        <img
          src="assets/img/logo.png"
          alt="Pizza builder home"
          className="pizza__logo__pic"
        />
      </Link>
    </div>
  );
};

export default pizzaLogo;
