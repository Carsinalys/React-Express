import React from "react";

interface Props {}

const pizzaSpiner: React.FC<Props> = props => {
  return (
    <div className="modal__sending">
      <div>
        <img src={"/assets/img/doubleRingSpinner.svg"} alt="spinner" />
      </div>
    </div>
  );
};

export default pizzaSpiner;
