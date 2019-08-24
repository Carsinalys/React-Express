import React from "react";

const OrderControls = props => {
  return (
    <div className="pizza__view__order__controls">
      <button
        className="pizza__view__order__controls__button red_theme"
        onClick={() => {
          props.resetBuild();
          props.resetMultiBuild();
        }}
      >
        Reset your build
      </button>
      <button
        className="pizza__view__order__controls__button"
        onClick={props.toggleModal}
      >
        Go to checkout
      </button>
    </div>
  );
};

export default OrderControls;
