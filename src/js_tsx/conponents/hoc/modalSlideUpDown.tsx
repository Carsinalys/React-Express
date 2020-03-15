import React from "react";
import { CSSTransition } from "react-transition-group";

interface Hoc {
  toggle: boolean;
  children: React.HTMLAttributes<any>;
}

const modal: React.FC<Hoc> = props => {
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
