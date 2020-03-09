import React from "react";

import Icons from "./pizzaBuilderIconsIngredients";

const modalContent = props => {
  return (
    <div className="pizza__view__order__content__modal">
      <div className="pizza__view__order__content__flex">
        <div>
          <h2>Check your pizza:</h2>
          <p>Weight is: {props.weight} g.</p>
          <p>Diameter is: {props.diameter} cm.</p>
          <p>Cost is: {props.cost} $</p>
        </div>
        <div className="pizza__view__order__modal__icons">
          <Icons
            ingredients={props.ingredients}
            minus={props.minus}
            browser={props.browser}
          />
        </div>
      </div>
      <button
        className="pizza__view__order__controls__button"
        onClick={props.add}
      >
        Save pizza fro order another one...
      </button>
      <button
        className="pizza__view__order__controls__button"
        onClick={props.checkout}
      >
        Go to checkout
      </button>
    </div>
  );
};

export default modalContent;
