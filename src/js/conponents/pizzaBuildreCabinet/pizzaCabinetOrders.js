import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Pagination from "./pizzaCabinetPagination";

const myOrdersCabinet = props => {
  let pageNum = 1;
  if (Object.keys(props.orders.orders).length > 0) {
    pageNum = Math.ceil(Object.keys(props.orders.orders).length / 5);
  }

  useEffect(() => {
    props.viewOrders(props.token, props.id, props.orders.orders);
  }, []);

  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [page, setPage] = useState(1);

  let prevOrders;

  if (props.orders.orders.error)
    prevOrders = <h1>{props.orders.orders.error}</h1>;
  else if (
    !props.orders.orders.error &&
    Object.keys(props.orders.orders).length
  ) {
    prevOrders = Object.keys(props.orders.orders).map((item, index) => {
      if (index >= page * 4 - 4 && index < page * 4) {
        if (!props.orders.orders[item].pizzas) {
          return (
            <div key={item} className="prev__order__cover">
              <div
                className="delete__order"
                onClick={() => {
                  setModal(true);
                  setId(item);
                }}
              ></div>
              <div className="prev__order__info__cover">
                <p>
                  <span className="prev__order__name">
                    {props.orders.orders[item].name}
                  </span>{" "}
                  ordered {props.orders.orders[item].pizzaName} worth{" "}
                  {props.orders.orders[item].cost}$, weight{" "}
                  {props.orders.orders[item].weight}
                  g. and diameter {props.orders.orders[item].diameter}cm
                </p>
                <p>
                  {props.orders.orders[item].street}
                  {props.orders.orders[item].house}-
                  {props.orders.orders[item].flat}
                </p>
              </div>
              <div className="prev__order__icon__cover">
                {Object.keys(props.orders.orders[item].ingredients).map(key => {
                  return props.orders.orders[item].ingredients[key].count >
                    0 ? (
                    <div
                      className="pizza__view__icon pizza__view__icon_small"
                      key={key}
                    >
                      <div className="pizza__view__icon__count pizza__view__icon__count_small">
                        <strong>
                          {props.orders.orders[item].ingredients[key].count}X
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
          return (
            <div key={item} className="prev__order__cover">
              <div
                className="delete__order"
                onClick={() => {
                  setModal(true);
                  setId(item);
                }}
              ></div>
              <div className="prev__order__info__cover">
                <p>
                  <span className="prev__order__name">
                    {props.orders.orders[item].name}{" "}
                  </span>
                  ordered{" "}
                  <span className="prev__order__name">
                    {props.orders.orders[item].pizzaName}
                  </span>
                </p>
                <p>
                  {props.orders.orders[item].street}
                  {props.orders.orders[item].house}-
                  {props.orders.orders[item].flat} total:{" "}
                  <span className="prev__order__name">
                    {props.orders.orders[item].totalCost}$
                  </span>
                </p>
              </div>
              <div className="prev__order__icon__cover">
                {props.orders.orders[item].pizzas.map((key, num) => {
                  return (
                    <div key={num} className="multi__pizza__single__cover">
                      {key.name ? (
                        <p className="multi__pizza__name__obj">{key.name}</p>
                      ) : null}
                      <p key={index + item + num}>
                        worth {key.cost}$, weight {key.weight}
                        g. and diameter {key.diameter} cm
                      </p>
                      <div className="prev__order__icon__cover">
                        {Object.keys(key.ingredients).map(ing => {
                          return key.ingredients[ing].count > 0 ? (
                            <div
                              className="pizza__view__icon pizza__view__icon_small"
                              key={ing}
                            >
                              <div className="pizza__view__icon__count pizza__view__icon__count_small">
                                <strong>{key.ingredients[ing].count}X</strong>
                              </div>
                              <div className="pizza__view__icon__pic">
                                <img
                                  src={require(`../../../img/${ing}.png`)}
                                  alt={ing}
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
      }
    });
  } else {
    prevOrders = null;
  }

  return (
    <div>
      <CSSTransition
        in={props.orders.modal}
        timeout={300}
        classNames="modal__global"
        mountOnEnter
        unmountOnExit
      >
        <div>
          <Spinner />
        </div>
      </CSSTransition>
      <CSSTransition
        in={modal}
        timeout={300}
        classNames="modal__global"
        mountOnEnter
        unmountOnExit
      >
        <div className="modal__delete">
          <div className="modal__delete__cover">
            <div>
              <h3>Are you shure?</h3>
            </div>
            <div className="modal__delete__buttons__cover">
              <button
                className="modal__delete__button"
                onClick={() => {
                  props.delete(id);
                  setModal(false);
                }}
              >
                Yes
              </button>
              <button
                className="modal__delete__button"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </CSSTransition>
      <button
        onClick={() => props.refresh(props.token, props.id, {})}
        className="refresh__orders__btn"
      >
        Refresh
      </button>
      {prevOrders}
      <Pagination num={pageNum} page={page} changePage={setPage} />
    </div>
  );
};

export default React.memo(myOrdersCabinet);
