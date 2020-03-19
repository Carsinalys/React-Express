import React, { useState, ChangeEvent } from "react";
import Inputs from "../pizzaBuilderCheckout/pizzaBuilderCheckoutInput";
import Spinner from "../pizzaBuilder/pizzaBuilderSpinner";
import Modal from "../hoc/modal";
import { port } from "../../../../portForFront";
import { Input, ChangeUserInfoFields } from '../../interfaces/interfaces';
import { InitStateAuth } from '../../reducer/pizzaAuth';

interface Props {
  inputs: {
    name?: Input | undefined;
    phone?: Input | undefined;
    pizza?: Input | undefined;
    street?: Input | undefined;
    house?: Input | undefined;
    flat?: Input | undefined;
    mail?: Input | undefined;
    password?: Input | undefined;
  }
  modal: boolean;
  onInput: (event: ChangeEvent) => {
    type: string;
    payload: any;
  }
  check: (event: Event) => void;
  auth: InitStateAuth;
  sendPhoto: (data: string, id: string) => any;
}

const cabinetSet: React.FC<Props> = props => {
  const changePreview = (event: React.ChangeEvent<HTMLInputElement>) => {
    const el = document.getElementById("preview1") as HTMLInputElement;
    const el1 = event.target as HTMLInputElement;
    el.style.backgroundImage =
      "url(" + URL.createObjectURL(el1.files![0]) + ")";
    el.style.borderRadius = "50%";
  };

  const [error, setError] = useState(false);

  const sendPhoto = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reader = new FileReader();
    const photo = document.querySelector("#avatarInput")! as HTMLInputElement;
    const innerPhoto = photo.files![0];
    if (innerPhoto.size < 307200) {
      setError(false);
      reader.onloadend = function() {
        props.sendPhoto(reader.result as string, props.auth.localId!);
      };
      reader.readAsDataURL(innerPhoto);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <Modal toggle={props.modal}>
        <Spinner />
      </Modal>
      <form action="#" className="set_cabinet__form">
        <h3 className="set_cabinet__form__title">Set your delivery info:</h3>
        <Inputs inputs={props.inputs} changeHandler={(event: ChangeEvent) =>  props.onInput(event)} />
        <div className="set_cabinet__form__submit__cover">
          <button
            type="submit"
            className="set_cabinet__form__submit"
            onClick={event => {
              const newEvent = event as unknown as Event;
              props.check(newEvent);
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
            {error ? (
              <p className="error_cabinet_photo">
                too large file (maxSize - 300kb)
              </p>
            ) : null}
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
