import React from "react";
import { CSSTransition } from "react-transition-group";

const modal = props => {
  return (
    <CSSTransition
      in={props.toggle}
      timeout={300}
      classNames="select__global"
      mountOnEnter
      unmountOnExit
    >
      {props.children}
    </CSSTransition>
  );
};

export default modal;
