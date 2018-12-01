import React from 'react';

const Drink = (props) => {
    return (
        <div className="container drink card justify-content-around align-items-center m-2 text-center">
            <h2 className="mt-2 font-weight-bold">{ (props.drinkInfo.iced ? "Iced " : "Hot ") + props.drinkInfo.name }</h2>
            <img src={ props.drinkInfo.img } alt={ props.drinkInfo.name } />
            <div className="mt-2 container drink-info">
                <h3 className="font-weight-light">{ props.drinkInfo.size }</h3>
                <p className="font-weight-normal lead">Price: ${ props.drinkInfo.price }</p>
                <p className="font-weight-light">Ordered At: { convTime(new Date(props.drinkInfo.orderTime)) }</p>
            </div>
        </div>
    )
}

const convTime = (d) => {
    var hours = d.getUTCHours();
    var pm = hours >= 12;
    hours = (pm && hours !== 12 ? hours - 12 : hours);
    var time = hours + ":" + d.getUTCMinutes() + (pm ? "PM" : "AM");
    return (time);
}

export default Drink;