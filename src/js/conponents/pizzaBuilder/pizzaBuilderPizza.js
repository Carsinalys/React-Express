import React from "react";

import Icons from "./pizzaBuilderIconsIngredients";

const pizzaBuilderPizza = props => {
  return (
    <div className="pizza__view__block">
      <div className="pizza__view__layout">
        {props.ingredients.base.count > 0 ? (
          <div className="pizza__view__bottom"></div>
        ) : null}
        {props.ingredients["pizza-sause"].count > 0 ? (
          <div className="pizza__view__sauce__bottom"></div>
        ) : null}
        {props.ingredients.cheese.count > 0 ? (
          <div className="pizza__view__cheese"></div>
        ) : null}
        {props.ingredients.bacon.count > 0 ||
        props.ingredients.beef.count > 0 ||
        props.ingredients.chicken.count > 0 ||
        props.ingredients.ham.count > 0 ||
        props.ingredients.meat.count > 0 ||
        props.ingredients.pork.count > 0 ? (
          <div className="pizza__view__meat"></div>
        ) : null}
        {props.ingredients.tomato.count > 0 ||
        props.ingredients.pickels.count > 0 ||
        props.ingredients.onion.count > 0 ||
        props.ingredients.mushroom.count > 0 ||
        props.ingredients["green-onion"].count > 0 ? (
          <div className="pizza__view__other"></div>
        ) : null}
        {props.ingredients.chili.count > 0 ||
        props.ingredients.jalapeo.count > 0 ? (
          <div className="pizza__view__chili"></div>
        ) : null}
      </div>
      <div className="pizza__view__info">
        {props.weight >= 1500 ? (
          <h1>Pizza is too big, we can`t make it...</h1>
        ) : null}
        <h2>About your pizza:</h2>
        <div>
          <h4 className="pizza__view__info__small__title">ingredients:</h4>
          <div className="pizza__view__info__icons">
            <Icons ingredients={props.ingredients} minus={props.minus} />
          </div>
        </div>
        <p>
          Pizza weight is: {props.weight} g. {props.message}
        </p>
        <p>Base weight is: {props.ingredients.base.weight} g.</p>
        <p>Diameter: {props.diameter} cm</p>
        <p>Cost is: {props.cost} $</p>
      </div>
    </div>
  );
};

export default React.memo(pizzaBuilderPizza);
