import React from "react";

const pizzaLogo = () => {
  const logo = require("../../../img/logo.png");
  return (
    <div className="pizza__logo">
      <a href="/">
        <img src={logo} alt="Pizza buikder" className="pizza__logo__pic" />
      </a>
    </div>
  );
};

export default pizzaLogo;
