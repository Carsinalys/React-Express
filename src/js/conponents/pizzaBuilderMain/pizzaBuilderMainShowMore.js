import React from "react";
import Orders from "./pizzaBuilderPrevOrders";

const showMore = props => {
  return (
    <div className="main__show__more__cover">
      <Orders
        orders={props.orders}
        browser={props.browser}
        theSame={props.theSame}
      />
      {props.counter > props.counterStore ? null : (
        <span
          className="prev__orders__show__more__btn"
          onClick={() => {
            props.counter < props.counterStore ? props.more() : null;
          }}
        >
          load more...
        </span>
      )}
    </div>
  );
};

export default showMore;
