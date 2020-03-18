import React from "react";
import { Room } from '../../interfaces/interfaces';

interface Props {
  rooms: Room[];
  choose: (room: string) => any;
  toggle: ()=>void;
  resetLoadmore: ()=>void;
  join: (room: string) => void;
  resetCounter: (room: string) => {
    type: string;
    payload: string;
  }
  newMsg: any;
  newMsgBanner: ()=>{type:string};
}

const rooms: React.FC<Props> = props => {
  let markup = props.rooms
    ? props.rooms.map(item => {
        return (
          <li
            key={item._id.toString()}
            className="chat__room__item"
            onClick={() => {
              props.choose(item.name);
              props.toggle();
              props.resetLoadmore();
              props.join(item.name);
              props.resetCounter(item.name);
              props.newMsgBanner();
            }}
          >
            {item.name}
            <span className="chat__room__item__newMsg">
              {props.newMsg[item.name] ? ` (${props.newMsg[item.name]})` : null}
            </span>
          </li>
        );
      })
    : null;
  return <ul className="chat__room__list">{markup}</ul>;
};
export default rooms;
