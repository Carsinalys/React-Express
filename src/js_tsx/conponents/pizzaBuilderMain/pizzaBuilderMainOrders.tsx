import React from "react";
import Orders from "./pizzaBuilderPrevOrders";
import { Order } from "../../interfaces/interfaces";

interface Props {
  browser: {
    safari: boolean
  }
  orders: Order[];
  theSame: (event: MouseEvent) => void;
  showMore: ()=>void;
  showMoreFetch: (num: number) => any;
  triggerForFetch: boolean;
  counter: number;
  counterStore: number | undefined;
  moreOrders: Order[];
}

const mainOrders: React.FC<Props> = props => {
  return (
    <div className="prev__orders">
      <div className="prev__orders__info">
        <h3 className="prev__orders__info__title">Just ordered:</h3>
      </div>
      <div className="prev__orders__cover">
        <Orders
          orders={props.orders}
          browser={props.browser}
          theSame={props.theSame}
        />
      </div>
      <span
        className="prev__orders__show__more__btn"
        onClick={() => {
          props.moreOrders.length === 0
            ? props.triggerForFetch
              ? null
              : props.showMoreFetch(props.counter)
            : null;
          props.showMore();
        }}
      >
        show more...
      </span>
    </div>
  );
};

export default React.memo(mainOrders);
