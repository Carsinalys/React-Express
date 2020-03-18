import React, {ChangeEvent} from "react";

import Icons from "../pizzaBuilder/pizzaBuilderIconsIngredients";
import Inputs from "./pizzaBuilderCheckoutInput";
import MultiPizzas from "../pizzaBuilder/pizzaBuilderMultiShow";
import { InitState } from '../../reducer/pizzaState';
import { InitStateMulti } from '../../reducer/multipleOrder';
import { Input } from '../../interfaces/interfaces';

interface Props {
  data: InitState;
  minus: (ingr: string) => {
    type: string;
    payload: string;
  }
  confirm: (event: Event) => false | undefined;
  inputs: {
    name: Input;
    phone: Input;
    pizza: Input;
    street: Input;
    house: Input;
    flat: Input;
    mail?: Input;
    password?: Input;
  }
  changeHandler: (event: ChangeEvent) => {
    type: string;
    payload: ChangeEvent;
  
  }
  multi: InitStateMulti;
  delete: (num: number) => {
    type: string;
    payload: number;
  }
  minusDlete: ()=>void;
  browser: {
    safari: boolean
  }
}

const checkoutContet: React.FC<Props> = props => {
  return (
    <div className="checkout__content__cover">
      <h3 className="checkout__content__title">Checkout form:</h3>
      <form
        action="#"
        id="checkout__form"
        onSubmit={event => {
          const newEvent = event as unknown as Event;
          props.confirm(newEvent);
        }}
      >
        <div className="checkout__content__top__cover">
          <Inputs inputs={props.inputs} changeHandler={props.changeHandler} />
        </div>
        {Object.keys(props.multi.pizzas).length > 0 ? (
          <MultiPizzas
            pizzas={props.multi.pizzas}
            minus={props.minusDlete}
            delete={props.delete}
            cost={props.multi.totalCost}
          />
        ) : (
          <div>
            <div className="checkout__content__ingredients__cover">
              <p>Your pizza ingredients:</p>
              <Icons
                ingredients={props.data.ingredients}
                minus={props.minus}
                browser={props.browser}
              />
            </div>
            <div className="checkout__content__params__cover">
              <p>
                Weight is: <strong>{props.data.weight}</strong> g.
              </p>
              <p>
                Cost is: <strong>{props.data.cost}</strong> $
              </p>
              <p>
                Diameter is: <strong>{props.data.diameter}</strong> cm.
              </p>
            </div>
          </div>
        )}

        <div className="checkout__content__submit__cover">
          <input
            type="submit"
            value="Confirm"
            id="checkout__submit"
            form="checkout__form"
            onClick={event => {
              const newEvent = event as unknown as Event;
              props.confirm(newEvent)
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default checkoutContet;
