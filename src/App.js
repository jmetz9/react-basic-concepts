import React, {Component} from 'react';
import './App.css';
import Country from './components/Country';

class App extends Component {
  state = {
    countries: [
      { id: 1, country: 'United States', goldMedalCount: 2 },
      { id: 2, country: 'China', goldMedalCount: 3 },
      { id: 3, country: 'Germany', goldMedalCount: 0 },
    ]
  }
  handleIncrement = (countryId) => {
    const country = this.state.countries.find(c => c.id === countryId);
    //this.setState({goldMedalCount: country.goldMedalCount += 1})
    this.setState({goldMedalCount: country.goldMedalCount += 1})
  }
  handleReduction = (countryId) => {
    const country = this.state.countries.find(c => c.id === countryId);
    this.setState({goldMedalCount: country.goldMedalCount -= 1})
    }
  render() {
    return (
      <div className="App">
        { this.state.countries.map( country =>
          <Country
          key = {country.id}
          country = {country}
          onIncrement = {this.handleIncrement}
          onReduction = {this.handleReduction}
        />)}
      </div>
    );
  }
}

export default App;
