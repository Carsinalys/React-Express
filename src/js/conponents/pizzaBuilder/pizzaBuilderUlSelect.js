import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

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
      <CSSTransition
        in={showList}
        timeout={300}
        classNames="select__global"
        mountOnEnter
        unmountOnExit
      >
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
                    src={require(`../../../img/${item}.png`)}
                    alt={item}
                    className="select__item__pic"
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default builderSelect;


