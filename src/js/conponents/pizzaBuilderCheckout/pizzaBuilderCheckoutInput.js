import React from "react";

const checkoutInput = props => {
  return Object.keys(props.inputs).map(item => {
    return (
      <div key={item} className="input__cover">
        <label htmlFor={props.inputs[item].id}>
          {props.inputs[item].label}
          <input
            className={
              props.inputs[item].isValid
                ? "imput__maping"
                : "imput__maping imput__maping_error"
            }
            type={props.inputs[item].type}
            id={props.inputs[item].id}
            form="checkout__form"
            placeholder={props.inputs[item].placeholder}
            value={props.inputs[item].value}
            onChange={event => props.changeHandler(event)}
            data-name={item}
          />
        </label>
      </div>
    );
  });
};

export default checkoutInput;
