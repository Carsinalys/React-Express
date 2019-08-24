import React from "react";

const rooms = props => {
  let markup = props.rooms
    ? props.rooms.map(item => {
        return (
          <li
            key={item}
            className="chat__room__item"
            onClick={() => {
              props.choose(item);
              props.toggle();
              props.resetLoadmore();
            }}
          >
            {item}
          </li>
        );
      })
    : null;
  return <ul className="chat__room__list">{markup}</ul>;
};
export default rooms;
