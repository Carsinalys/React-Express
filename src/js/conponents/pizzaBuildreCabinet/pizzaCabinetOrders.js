import React, { useEffect, useState } from "react";
import Modal from "../hoc/modal";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Pagination from "./pizzaCabinetPagination";

const myOrdersCabinet = props => {
  let pageNum = 1;
  if (props.orders.orders)
    if (props.orders.orders.length > 0) {
      pageNum = Math.ceil(props.orders.count / 4);
    }

  useEffect(() => props.viewOrders(`?page=1&limit=4&id=${props.id}`), []);

  const [modal, setModal] = useState(false);
  const [id, setId] = useState(null);
  const [page, setPage] = useState(1);

  let prevOrders;

  if (!props.orders.orders) prevOrders = <h1>No orders get yet</h1>;
  else if (!props.orders.orders.error && props.orders.orders.length > 0) {
    prevOrders = props.orders.orders.map((item, index) => {
      if (!item.pizzas.length > 0) {
        return (
          <div key={item._id.toString()} className="prev__order__cover">
            <div
              className="delete__order"
              onClick={() => {
                setModal(true);
                setId(item._id.toString());
              }}
            ></div>
            <div className="prev__order__info__cover">
              <p>
                <span className="prev__order__name">{item.name}</span> ordered{" "}
                {item.pizzaName} worth {item.cost}$, weight {item.weight}
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
          <div key={item._id.toString()} className="prev__order__cover">
            <div
              className="delete__order"
              onClick={() => {
                setModal(true);
                setId(item);
              }}
            ></div>
            <div className="prev__order__info__cover">
              <p>
                <span className="prev__order__name">{item.name} </span>
                ordered{" "}
                <span className="prev__order__name">{item.pizzaName}</span>
              </p>
              <p>
                {item.street}
                {item.house}-{item.flat} total:{" "}
                <span className="prev__order__name">{item.totalCost}$</span>
              </p>
            </div>
            <div className="prev__order__icon__cover">
              {item.pizzas.map((key, num) => {
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
    });
  } else {
    prevOrders = null;
  }

  return (
    <div>
      <Modal toggle={props.orders.modal}>
        <div>
          <Spinner />
        </div>
      </Modal>
      <Modal toggle={modal}>
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
      </Modal>
      <button
        onClick={() => {
          props.viewOrders("?page=1&limit=4");
          setPage(1);
        }}
        className="refresh__orders__btn"
      >
        Refresh
      </button>
      {prevOrders}
      <Pagination
        num={pageNum}
        page={page}
        changePage={setPage}
        viewOrders={props.viewOrders}
        id={props.id}
      />
    </div>
  );
};

export default React.memo(myOrdersCabinet);
