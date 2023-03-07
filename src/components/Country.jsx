import React, { Component } from 'react';

class Country extends Component {
    render(){
        const {onIncrement, onReduction, onDelete, country} = this.props;
        return (
            <div>
                <div>{country.country}</div>
                <div>Gold Medals: {country.goldMedalCount} <button onClick={() => onIncrement(country.id)}>+</button>
                <button onClick={() => onReduction(country.id)}>-</button>
                <button onClick={() => onDelete(country.id)}>Delete</button>
                </div>
            </div>
        );
    }
}

export default Country;