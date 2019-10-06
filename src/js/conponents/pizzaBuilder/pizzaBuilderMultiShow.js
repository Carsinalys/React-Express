import React from "react";
import Icons from "./pizzaBuilderIconsIngredients";

const multiShow = props => {
  let markup =
    props.pizzas.length > 0
      ? props.pizzas.map((item, index) => {
          return (
            <li key={index} className="multi__order__item">
              <div className="pizza__view__order__content__flex">
                <div className="multi__order__params__cover">
                  {item.name ? (
                    <p className="multi__pizza__name__obj">{item.name}</p>
                  ) : null}
                  <p>Weight is: {item.weight} g.</p>
                  <p>Diameter is: {item.diameter} cm.</p>
                  <p>Cost is: {item.cost} $</p>
                </div>
                <div className="multi__order__icons__cover">
                  <Icons ingredients={item.ingredients} minus={props.minus} />
                </div>
              </div>
              <button
                className="delete__multi__order"
                onClick={() => props.delete(index)}
              >
                delete
              </button>
            </li>
          );
        })
      : null;
  return (
    <div className="multi__pizzas__cover">
      {props.pizzas.length > 0 ? (
        <h4 className="multi__title">You pizzas:</h4>
      ) : null}
      {props.pizzas.length > 0 ? (
        <h5 className="multi__total__price">Total price: {props.cost}$</h5>
      ) : null}
      <ul>{markup}</ul>
    </div>
  );
};

export default multiShow;
