import React, { Component } from 'react';
import { connect } from 'react-redux';

import Drink from '../components/drink';

class DrinkList extends Component {
    renderDrinks() {
        return this.props.drinks.map((drink) => {
            return (
                <Drink drinkInfo={ drink } key={ drink.name + drink.orderTime } />
            );
        });
    }

    render() {
        return (
            <div className="container drinks">
                <h1 className="text-center m-2">Your Drink Orders</h1>
                <div className="d-flex flex-wrap justify-content-center p-3">
                    {this.renderDrinks()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        drinks: state.drinks
    };
}

export default connect(mapStateToProps)(DrinkList);