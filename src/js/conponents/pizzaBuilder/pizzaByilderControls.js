import React from "react";

const pizzaBuilderControls = props => {
  return (
    <div className="pizza__control">
      <div className="pizza__control__title">
        <p className="pizza__builder__controls__ingredient__title">
          {props.name}
        </p>
        <span className="pizza__control__title__weight">
          weight: {props.weight} g. her point
        </span>
      </div>
      <div>
        <button
          className="pizza__control__button"
          onClick={() => props.minus(props.name)}
        >
          -
        </button>
        <span>{props.count}</span>
        <button
          className="pizza__control__button"
          onClick={() => props.plus(props.name)}
        >
          +
        </button>
      </div>
      <div className="pizza__controls__image">
        <img src={`/assets/img/${props.name}.png`} alt="" />
      </div>
    </div>
  );
};

export default pizzaBuilderControls;
