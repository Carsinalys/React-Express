import React, { ChangeEvent, PropsWithChildren } from "react";
import { Input, InputKeys } from '../../interfaces/interfaces';

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
  };
  changeHandler: (event: ChangeEvent) => {
    type: string;
    payload: any;
  }
}

const checkoutInput = (props: Props) => {
return <>{ 
    Object.keys(props.inputs).map(item => {
    const curItem = item as InputKeys
    return (
      <div key={item} className="input__cover">
        <label htmlFor={props.inputs[curItem]!.id}>
          {props.inputs[curItem]!.label}
          <input
            className={
              props.inputs[curItem]!.isValid
                ? "imput__maping"
                : "imput__maping imput__maping_error"
            }
            type={props.inputs[curItem]!.type}
            id={props.inputs[curItem]!.id}
            form="checkout__form"
            placeholder={props.inputs[curItem]!.placeholder}
            value={props.inputs[curItem]!.value}
            onChange={event => props.changeHandler(event)}
            data-name={curItem}
          />
          </label>
        </div>
      );
    })
  }</>
};

export default checkoutInput;
