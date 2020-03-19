import React from "react";
import { Order } from "../../interfaces/interfaces";
import { Ingredients } from "../../reducer/pizzaState";

interface Props {
  orders: Order[];
  browser: {
    safari: boolean
  }
  theSame: (event: MouseEvent) => void;
}

const orders: React.FC<Props> = props => {
  let prevOrders =
    props.orders.length > 0
      ? props.orders.map((item, index) => {
          if (item.pizzas!.length === 0) {
            return (
              <div key={item._id} className="prev__order__cover">
                <div className="prev__order__hover">
                  <button
                    className="prev__order__hover__btn"
                    data-id={item._id}
                    onClick={event => {
                      const newEvent = event as unknown as MouseEvent;
                      props.theSame(newEvent);
                    }}
                  >
                    Want the same...
                  </button>
                </div>
                <div className="prev__order__info__cover">
                  <p>
                    <span className="prev__order__name">{item.name}</span>{" "}
                    ordered {item.pizzaName} worth {item.cost}$, weight{" "}
                    {item.weight}
                    g. and diameter {item.diameter}cm
                  </p>
                  <p>
                    {item.street}
                    {item.house}-{item.flat}
                  </p>
                </div>
                <div className="prev__order__icon__cover">
                  {Object.keys(item.ingredients).map(key => {
                    const newItem = key as Ingredients;
                    return item.ingredients[newItem].count > 0 ? (
                      <div
                        className="pizza__view__icon pizza__view__icon_small"
                        key={key}
                      >
                        <div className="pizza__view__icon__count pizza__view__icon__count_small">
                          <strong>{item.ingredients[newItem].count}X</strong>
                        </div>
                        <div className="pizza__view__icon__pic">
                          {props.browser.safari ? (
                            <img
                              src={`assets/img/${key}.png`}
                              alt={key}
                              className="pizza__view__icon__image"
                            />
                          ) : (
                            <img
                              src={`assets/img/webp/${key}.webp`}
                              alt={key}
                              className="pizza__view__icon__image"
                            />
                          )}
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            );
          } else {
            return (
              <div key={item._id} className="prev__order__cover">
                <div className="prev__order__hover">
                  <button
                    className="prev__order__hover__btn"
                    data-id={item._id}
                    onClick={event => {
                      const newEvent = event as unknown as MouseEvent;
                      props.theSame(newEvent);
                    }}
                  >
                    Want the same...
                  </button>
                </div>
                <div className="prev__order__info__cover">
                  <p>
                    <span className="prev__order__name">{item.name}</span>{" "}
                    total: {item.totalCost}$
                  </p>
                  <p>
                    {item.street}
                    {item.house}-{item.flat}
                  </p>
                </div>
                <div className="prev__order__icon__cover">
                  {item.pizzas!.map((pizza, index) => {
                    return (
                      <div key={index} className="multi__pizza__main__cover">
                        <p>
                          {pizza.name} worth {pizza.cost}$, weight{" "}
                          {pizza.weight}
                          g. and diameter {pizza.diameter}cm
                        </p>
                        <div className="multi__pizza__icos__cover">
                          {Object.keys(pizza.ingredients).map(key => {
                            const newItem = key as Ingredients;
                            return pizza.ingredients[newItem].count > 0 ? (
                              <div
                                className="pizza__view__icon pizza__view__icon_small"
                                key={key}
                              >
                                <div className="pizza__view__icon__count pizza__view__icon__count_small">
                                  <strong>
                                    {pizza.ingredients[newItem].count}X
                                  </strong>
                                </div>
                                <div className="pizza__view__icon__pic">
                                  {props.browser.safari ? (
                                    <img
                                      src={`assets/img/${key}.png`}
                                      alt={key}
                                      className="pizza__view__icon__image"
                                    />
                                  ) : (
                                    <img
                                      src={`assets/img/webp/${key}.webp`}
                                      alt={key}
                                      className="pizza__view__icon__image"
                                    />
                                  )}
                                </div>
                              </div>
                            ) : null;
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })
      : null;

  return <>{prevOrders}</>;
};

export default orders;
