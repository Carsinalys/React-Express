import React from "react";
import Inputs from "../pizzaBuilderCheckout/pizzaBuilderCheckoutInput";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";
import { port } from "../../../../portForFront";

const cabinetSet = props => {
  const changePreview = event => {
    var output = document.getElementById("preview");
    output.src = URL.createObjectURL(event.target.files[0]);
  };

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
      <div>
        <h3 className="add__photo__title">Set photo profile</h3>
        <form
          action={`${port}/api/v1.0/user/setPhoto`}
          id="avatar"
          method="POST"
          encType="multipart/form-data"
          className="add__photo__form"
        >
          <div className="add__photo__input__cover">
            <input
              type="file"
              id="avatar__file"
              name="avatar"
              form="avatar"
              onChange={event => changePreview(event)}
              style={{
                width: 20 + "rem",
                height: 20 + "rem",
                opacity: 0,
                margin: 0,
                zIndex: 10,
                top: 0,
                left: 0,
                position: "absolute"
              }}
            />
            <img
              src={"/assets/img/preview.svg"}
              alt="upload image"
              className="add__photo__preview"
              id="preview"
            />
          </div>
          <div className="add__photo__submit__cover">
            <button
              type="submit"
              id="avatar__submit"
              name="submit"
              form="avatar"
              className="add__photo__submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(cabinetSet);
