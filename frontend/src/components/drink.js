import React from 'react';

const Drink = (props) => {
    return (
        <div className="container drink card justify-content-around align-items-center m-2">
            <h2 className="mt-2">{ props.drinkInfo.name }</h2>
            <img src={ props.drinkInfo.img } alt={ props.drinkInfo.name } />
            <div className="container drink-info">
                <p className="text-center lead">Price: ${ props.drinkInfo.price }</p>
            </div>
        </div>
    )
}

export default Drink;