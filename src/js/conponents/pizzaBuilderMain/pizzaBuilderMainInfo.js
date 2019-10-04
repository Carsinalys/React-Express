import React from "react";

const mainInfo = props => {
  return (
    <div className="main__info__cover">
      <h2>Welcome to custom pizza builder!</h2>
      <div className="main__info__block">
        <div className="main__info__block__pic">
          <img
            src={"/assets/img/pizzaChef.jpg"}
            alt="Pizza Chef"
            className="main__info__block__image"
          />
        </div>
        <div className="main__info__block__text">
          <p>
            Delicious pizza with fresh ingredients, private recipe dough and
            sauces, fast delivery and best quality are waiting for you!..
          </p>
        </div>
      </div>
    </div>
  );
};

export default mainInfo;
