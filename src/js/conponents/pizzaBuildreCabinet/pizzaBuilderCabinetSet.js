import React from "react";
import Inputs from "../pizzaBuilderCheckout/pizzaBuilderCheckoutInput";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";

const cabinetSet = props => {
  return (
    <div>
      <Modal toggle={props.modal}>
        <Spinner />
      </Modal>
      <form action="#" className="set_cabinet__form">
        <h3 className="set_cabinet__form__title">Set your delivery info:</h3>
        <Inputs inputs={props.inputs} changeHandler={props.onInput} />
        <div className="set_cabinet__form__submit__cover">
          <button
            type="submit"
            className="set_cabinet__form__submit"
            onClick={() => props.check(event)}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(cabinetSet);
