import React from 'react';

const pizzaSpiner = (props) => {
    return (
        <div className="modal__sending">
            <div>
                <img src={require("../../../img/spinner.svg")} alt="spinner"/>
            </div>
        </div>
    )
}

export default pizzaSpiner;