import React, { useState } from "react";
import ModalSlide from "../hoc/modalSlideUpDown";
import { IngredientsObj, Ingredients } from '../../reducer/pizzaState';

interface Props {
  ingredients: IngredientsObj;
  browser: {
    safari: boolean;
  }
  change: (name: Ingredients) => void
}

const builderSelect: React.FC<Props> = props => {
  const [showList, setShowList] = useState(false);

  return (
    <div className="select__cover__ul">
      <button
        className="toggle__select"
        onClick={() => {
          showList ? setShowList(false) : setShowList(true);
        }}
      >
        Choose ingredient...
      </button>
      <ModalSlide toggle={showList}>
        <ul className="select__list">
          {Object.keys(props.ingredients).map(item => {
            return (
              <li
                value={item}
                key={item}
                className="select__item"
                onClick={(event) => {
                  const el = event.target as HTMLUListElement;
                  const elText = el.textContent as Ingredients
                  setShowList(false);
                  props.change(elText);
                }}
              >
                <div className="select__item__title__cover">
                  <p className="ul__select__title__ingredients">{item}</p>
                </div>
                <div>
                  {props.browser.safari ? (
                    <img
                      src={`/assets/img/${item}.png`}
                      alt={item}
                      className="select__item__pic"
                    />
                  ) : (
                    <img
                      src={`/assets/img/webp/${item}.webp`}
                      alt={item}
                      className="select__item__pic"
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </ModalSlide>
    </div>
  );
};

export default builderSelect;
