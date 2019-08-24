import React from "react";

const cabinetInfo = props => {
  console.log(props);
  return (
    <div className="cabinet__info__cover">
      <ul className="cabinet__info__list">
        {Object.keys(props.info.info).map(item => {
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
