import React from "react";

const icons = props => {
  let markup = Object.keys(props.ingredients).map(key => {
    return props.ingredients[key].count > 0 ? (
      <div className="pizza__view__icon" key={key}>
        <div className="pizza__view__icon__count">
          <strong>{props.ingredients[key].count}X</strong>
        </div>
        {props.showCross == "false" ? null : (
          <div
            className="pizza__view__icon__delete"
            data-value={key}
            onClick={() => props.minus(event.target.dataset.value)}
          ></div>
        )}
        <div className="pizza__view__icon__pic">
          <img
            src={`assets/img/${key}.png`}
            alt={key}
            className="pizza__view__icon__image"
          />
        </div>
      </div>
    ) : null;
  });
  return <div className="cover__for__indredient__icon">{markup}</div>;
};

export default icons;
