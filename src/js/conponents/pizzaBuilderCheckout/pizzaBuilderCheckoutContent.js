import React from "react";

import Icons from "../pizzaBuilder/pizzaBuilderIconsIngredients";
import Inputs from "./pizzaBuilderCheckoutInput";
import MultiPizzas from "../pizzaBuilder/pizzaBuilderMultiShow";

const checkoutContet = props => {
  return (
    <div className="checkout__content__cover">
      <h3 className="checkout__content__title">Checkout form:</h3>
      <form action="#" id="checkout__form">
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
              <Icons ingredients={props.data.ingredients} minus={props.minus} />
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
            onClick={event => props.confirm(event)}
          />
        </div>
      </form>
    </div>
  );
};

export default checkoutContet;
