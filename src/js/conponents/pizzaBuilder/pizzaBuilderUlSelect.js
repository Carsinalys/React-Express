import React, { useState } from "react";
import ModalSlide from "../hoc/modalSlideUpDown";

const builderSelect = props => {
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
        <ul className="select__list" onChange={() => props.change(event)}>
          {Object.keys(props.ingredients).map(item => {
            return (
              <li
                value={item}
                key={item}
                className="select__item"
                onClick={() => {
                  setShowList(false);
                  props.change(event);
                }}
              >
                <div className="select__item__title__cover">
                  <p className="ul__select__title__ingredients">{item}</p>
                </div>
                <div>
                  <img
                    src={`/assets/img/${item}.png`}
                    alt={item}
                    className="select__item__pic"
                  />
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
