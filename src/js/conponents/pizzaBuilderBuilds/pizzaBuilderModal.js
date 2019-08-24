import React from 'react';

const modal = props => {
    props.builds[props.curPizza].name = props.curPizza;
    return (
        <div className="ready__builds__modal__cover">
            <div className="ready__builds__modal__block">
                <div className="ready__builds__modal__title__cover">
                    <h3 className="ready__builds__modal__title">Choose option:</h3>
                </div>
                <div className="ready__builds__modal__btns__cover">
                    <div className="ready__builds__modal__btn__cover">
                        <button className="ready__builds__modal__btn" onClick={()=>props.add(props.builds[props.curPizza])}>Add to list and contine</button>
                    </div>
                    <div className="ready__builds__modal__btn__cover">
                        <button className="ready__builds__modal__btn" onClick={()=>{props.add(props.builds[props.curPizza]);props.redirect();}}>Add and proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default modal;