import React from "react";

const orders = props => {
  let prevOrders =
    props.orders.length > 0
      ? props.orders.map((item, index) => {
          if (item.pizzas.length === 0) {
            return (
              <div key={item._id.toString()} className="prev__order__cover">
                <div className="prev__order__hover">
                  <button
                    className="prev__order__hover__btn"
                    data-id={item._id.toString()}
                    onClick={event => props.theSame(event)}
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
                    return item.ingredients[key].count > 0 ? (
                      <div
                        className="pizza__view__icon pizza__view__icon_small"
                        key={key}
                      >
                        <div className="pizza__view__icon__count pizza__view__icon__count_small">
                          <strong>{item.ingredients[key].count}X</strong>
                        </div>
                        <div className="pizza__view__icon__pic">
                          {props.browser.safari ? (
                            <img
                              src={require(`../../../img/${key}.png`)}
                              alt={key}
                              className="pizza__view__icon__image"
                            />
                          ) : (
                            <img
                              src={require(`../../../img/webp/${key}.webp`)}
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
              <div key={item._id.toString()} className="prev__order__cover">
                <div className="prev__order__hover">
                  <button
                    className="prev__order__hover__btn"
                    data-id={item._id.toString()}
                    onClick={event => props.theSame(event)}
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
                  {item.pizzas.map((pizza, index) => {
                    return (
                      <div key={index} className="multi__pizza__main__cover">
                        <p>
                          {pizza.name} worth {pizza.cost}$, weight{" "}
                          {pizza.weight}
                          g. and diameter {pizza.diameter}cm
                        </p>
                        <div className="multi__pizza__icos__cover">
                          {Object.keys(pizza.ingredients).map(key => {
                            return pizza.ingredients[key].count > 0 ? (
                              <div
                                className="pizza__view__icon pizza__view__icon_small"
                                key={key}
                              >
                                <div className="pizza__view__icon__count pizza__view__icon__count_small">
                                  <strong>
                                    {pizza.ingredients[key].count}X
                                  </strong>
                                </div>
                                <div className="pizza__view__icon__pic">
                                  {props.browser.safari ? (
                                    <img
                                      src={require(`../../../img/${key}.png`)}
                                      alt={key}
                                      className="pizza__view__icon__image"
                                    />
                                  ) : (
                                    <img
                                      src={require(`../../../img/webp/${key}.webp`)}
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
