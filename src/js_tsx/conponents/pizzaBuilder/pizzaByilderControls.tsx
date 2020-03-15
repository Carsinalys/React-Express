import React from "react";

interface Props {
  name: string;
  weight: number;
  count: number;
  minus: (name: string) => {
    type: string;
    payload: string
  }
  plus: (name: string) => {
    type: string;
    payload: string
  }
  browser: {
    safari: boolean
  }
}

const pizzaBuilderControls: React.FC<Props> = props => {
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
        {props.browser.safari ? (
          <img src={`/assets/img/${props.name}.png`} alt="Current ingredient" />
        ) : (
          <img
            src={`/assets/img/webp/${props.name}.webp`}
            alt="Current ingredient"
          />
        )}
      </div>
    </div>
  );
};

export default pizzaBuilderControls;
