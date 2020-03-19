import React from "react";
import { InitStateCabinet, keysInfo } from '../../reducer/pizzaCabinet';

interface Props {
  info: InitStateCabinet
}

const cabinetInfo: React.FC<Props> = props => {
  return (
    <div className="cabinet__info__cover">
      <ul className="cabinet__info__list">
        {Object.keys(props.info.info).map(item => {
          const newItem = item as keysInfo;
          if (props.info.info[newItem] !== undefined)
            return (
              <li key={item} className="cabinet__info__item">
                <span className="cabinet__info__item_bold">{item}</span>:{" "}
                {props.info.info[newItem]}
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default React.memo(cabinetInfo);
