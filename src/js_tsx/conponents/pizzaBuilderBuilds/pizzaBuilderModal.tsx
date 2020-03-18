import React from "react";
import { Pizza } from '../../interfaces/interfaces';

interface Props {
  redirect: ()=>void;
  curPizza: Pizza | undefined;
  builds: Pizza[];
  add: (data: Pizza)=>any;
}

const modal: React.FC<Props> = props => {
  return (
    <div className="ready__builds__modal__cover">
      <div className="ready__builds__modal__block">
        <div className="ready__builds__modal__title__cover">
          <h3 className="ready__builds__modal__title">Choose option:</h3>
        </div>
        <div className="ready__builds__modal__btns__cover">
          <div className="ready__builds__modal__btn__cover">
            <button
              className="ready__builds__modal__btn"
              onClick={() => props.add(props.curPizza!)}
            >
              Add to list and contine
            </button>
          </div>
          <div className="ready__builds__modal__btn__cover">
            <button
              className="ready__builds__modal__btn"
              onClick={() => {
                props.add(props.curPizza!);
                props.redirect();
              }}
            >
              Add and proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default modal;
