import React, { Component } from 'react';

class Country extends Component {
    // handleIncrement = () => {
    //     this.setState({goldMedalCount: this.state.goldMedalCount + 1})
    // }
    // handleReduction = () => {
    //     this.setState({goldMedalCount: this.state.goldMedalCount - 1})
    // }
    render(){
        const {onIncrement, onReduction, country} = this.props;
        return (
            <div>
                <div>{country.country}</div>
                <div>Gold Medals: {country.goldMedalCount} <button onClick={() => onIncrement(country.id)}>+</button>
                <button onClick={() => onReduction(country.id)}>-</button>
                </div>
            </div>
        );
    }
}

export default Country;