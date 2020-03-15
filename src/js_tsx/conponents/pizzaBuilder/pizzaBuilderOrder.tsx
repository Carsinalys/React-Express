import React from "react";

interface Props {
  toggleModal: ()=>void;
  resetBuild: ()=>{
    type: string
  }
  resetMultiBuild: ()=>{
    type: string
  }
}

const OrderControls: React.FC<Props> = props => {
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
