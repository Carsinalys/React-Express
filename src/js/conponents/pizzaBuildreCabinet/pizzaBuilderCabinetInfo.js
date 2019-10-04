import React from "react";
import { NavLink } from "react-router-dom";

const cabinetInfo = props => {
  return (
    <div className="cabinet__info__cover">
      <ul className="cabinet__info__list">
        {Object.keys(props.info.info).map(item => {
          if (props.info.info[item] !== undefined)
            return (
              <li key={item} className="cabinet__info__item">
                <span className="cabinet__info__item_bold">{item}</span>:{" "}
                {props.info.info[item]}
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default React.memo(cabinetInfo);
