import React from "react";
import {Ingredients} from '../../reducer/pizzaState';
import { NewIngredientsObj } from '../../interfaces/interfaces';

interface IngredientsProps {
  ingredients: NewIngredientsObj
  showCross?: string;
  browser?: {
    safari: boolean
  };
  minus: (ing: string) => void
}
const icons: React.FC<IngredientsProps> = props => {
  let markup = Object.keys(props.ingredients).map(key => {
    let curKey = key as Ingredients
    return props.ingredients[curKey]!.count > 0 ? (
      <div className="pizza__view__icon" key={key}>
        <div className="pizza__view__icon__count">
          <strong>{props.ingredients[curKey]!.count}X</strong>
        </div>
        {props.showCross == "false" ? null : (
          <div
            className="pizza__view__icon__delete"
            data-value={key}
            onClick={(event: React.MouseEvent<HTMLElement, Event>) => {
              const el = event.target as HTMLElement;
              el.getAttribute("data-value")
                props.minus(el.getAttribute("data-value")!)
            }
          }
          ></div>
        )}
        <div className="pizza__view__icon__pic">
          <img
            src={
              props.browser
                ? props.browser.safari
                  ? `assets/img/${key}.png`
                  : `assets/img/webp/${key}.webp`
                : `assets/img/webp/${key}.webp`
            }
            alt={key}
            className="pizza__view__icon__image"
          />
        </div>
      </div>
    ) : null;
  });
  return <div className="cover__for__indredient__icon">{markup}</div>;
};

export default icons;
