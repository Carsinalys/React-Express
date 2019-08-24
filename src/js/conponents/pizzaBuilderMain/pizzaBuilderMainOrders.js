import React from "react";

const mathArr = obj => {
  let arrKeys = Object.keys(obj);
  let arrNumbers = [];
  for (let i = 0; i < 3; i++) {
    let numValue = Math.floor(Math.random() * arrKeys.length);
    function checkValues() {
      arrNumbers.forEach(item => {
        if (item == numValue) {
          numValue = Math.floor(Math.random() * arrKeys.length);
          checkValues();
        }
      });
    }
    checkValues();

    arrNumbers.push(numValue);
  }
  return [
    arrKeys[arrNumbers[0]],
    arrKeys[arrNumbers[1]],
    arrKeys[arrNumbers[2]]
  ];
};

const mainOrders = props => {
  let prevOrders =
    Object.keys(props.orders).length > 0
      ? mathArr(props.orders).map((item, index) => {
          if (!props.orders[item].pizzas) {
            return (
              <div key={item} className="prev__order__cover">
                <div className="prev__order__hover">
                  <button
                    className="prev__order__hover__btn"
                    data-id={item}
                    onClick={() => props.theSame(event)}
                  >
                    Want the same...
                  </button>
                </div>
                <div className="prev__order__info__cover">
                  <p>
                    <span className="prev__order__name">
                      {props.orders[item].name}
                    </span>{" "}
                    ordered {props.orders[item].pizzaName} worth{" "}
                    {props.orders[item].cost}$, weight{" "}
                    {props.orders[item].weight}
                    g. and diameter {props.orders[item].diameter}cm
                  </p>
                  <p>
                    {props.orders[item].street}
                    {props.orders[item].house}-{props.orders[item].flat}
                  </p>
                </div>
                <div className="prev__order__icon__cover">
                  {Object.keys(props.orders[item].ingredients).map(key => {
                    return props.orders[item].ingredients[key].count > 0 ? (
                      <div
                        className="pizza__view__icon pizza__view__icon_small"
                        key={key}
                      >
                        <div className="pizza__view__icon__count pizza__view__icon__count_small">
                          <strong>
                            {props.orders[item].ingredients[key].count}X
                          </strong>
                        </div>
                        <div className="pizza__view__icon__pic">
                          <img
                            src={require(`../../../img/${key}.png`)}
                            alt={key}
                            className="pizza__view__icon__image"
                          />
                        </div>
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            );
          } else {
            console.log(item);
            return (
              <div key={item} className="prev__order__cover">
                <div className="prev__order__hover">
                  <button
                    className="prev__order__hover__btn"
                    data-id={item}
                    onClick={() => props.theSame(event)}
                  >
                    Want the same...
                  </button>
                </div>
                <div className="prev__order__info__cover">
                  <p>
                    <span className="prev__order__name">
                      {props.orders[item].name}
                    </span>{" "}
                    total: {props.orders[item].totalCost}$
                  </p>
                  <p>
                    {props.orders[item].street}
                    {props.orders[item].house}-{props.orders[item].flat}
                  </p>
                </div>
                <div className="prev__order__icon__cover">
                  {props.orders[item].pizzas.map((pizza, index) => {
                    return (
                      <div key={index} className="multi__pizza__main__cover">
                        <p>
                          {pizza.pizzaName} worth {pizza.cost}$, weight{" "}
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
                                  <img
                                    src={require(`../../../img/${key}.png`)}
                                    alt={key}
                                    className="pizza__view__icon__image"
                                  />
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

  return (
    <div className="prev__orders">
      <div className="prev__orders__info">
        <h3 className="prev__orders__info__title">Just ordered:</h3>
      </div>
      <div className="prev__orders__cover">{prevOrders}</div>
    </div>
  );
};

export default React.memo(mainOrders);
