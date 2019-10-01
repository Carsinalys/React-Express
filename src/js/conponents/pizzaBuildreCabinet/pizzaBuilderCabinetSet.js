import React from "react";
import Inputs from "../pizzaBuilderCheckout/pizzaBuilderCheckoutInput";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";
import { port } from "../../../../portForFront";

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
            onClick={event => props.check(event)}
          >
            Send
          </button>
        </div>
      </form>
      <form
        action={`${port}/api/v1.0/user/setPhoto`}
        id="avatar"
        method="POST"
        encType="multipart/form-data"
      >
        <div>
          <input type="file" id="avatar__file" name="avatar" form="avatar" />
          <label htmlFor="avatar__file">Choose photo</label>
        </div>
        <div>
          <input
            type="submit"
            id="avatar__submit"
            name="submit"
            form="avatar"
          />
        </div>
      </form>
    </div>
  );
};

export default React.memo(cabinetSet);
