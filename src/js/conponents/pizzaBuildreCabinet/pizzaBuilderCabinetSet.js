import React from "react";
import Inputs from "../pizzaBuilderCheckout/pizzaBuilderCheckoutInput";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";
import { port } from "../../../../portForFront";

const cabinetSet = props => {
  const changePreview = event => {
    const el = document.getElementById("preview1");
    el.style.backgroundImage =
      "url(" + URL.createObjectURL(event.target.files[0]) + ")";
    el.style.borderRadius = "50%";
  };

  const sendPhoto = event => {
    event.preventDefault();
    const reader = new FileReader();
    const photo = document.querySelector("#avatarInput").files[0];
    reader.onloadend = function() {
      props.sendPhoto(reader.result, props.auth.localId);
    };
    reader.readAsDataURL(photo);
    localStorage.setItem("id", props.auth.localId);
    localStorage.setItem("photoChanged", true);
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
            onClick={event => {
              props.check(event);
            }}
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
          onSubmit={event => sendPhoto(event)}
        >
          <div className="add__photo__input__cover">
            <input
              type="file"
              id="avatarInput"
              name="avatar"
              form="avatar"
              accept="image/*"
              onChange={event => changePreview(event)}
              style={{
                width: 20 + "rem",
                height: 20 + "rem",
                opacity: 0,
                margin: 0,
                zIndex: 10,
                top: 0,
                left: 0,
                position: "absolute",
                cursor: "pointer"
              }}
            />
            <div className="add__photo__preview" id="preview1"></div>
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
