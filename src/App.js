import React, {Component} from 'react';
import './App.css';
import Country from './components/Country';
import NewCountry from './components/NewCountry'

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
    this.setState({goldMedalCount: country.goldMedalCount += 1});
  }
  handleReduction = (countryId) => {
    const country = this.state.countries.find(c => c.id === countryId);
    this.setState({goldMedalCount: country.goldMedalCount > 0 ? country.goldMedalCount -= 1 : 0})
  }
  handleAdd = (country, gold) => {
    const { countries } = this.state;
    const id = countries.length === 0 ? 1 : Math.max(...countries.map(country => country.id)) + 1;
    const mutableCountries = countries.concat({ id: id, country: country, goldMedalCount: gold });
    this.setState({ countries:mutableCountries });
  }
  handleDelete = (countryId) => {
    const country = this.state.countries.filter(c => c.id !== countryId);
    this.setState({countries:country})
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
          onDelete = {this.handleDelete}
        />)}
        <NewCountry onAdd={this.handleAdd}/>
      </div>
    );
  }
}

export default App;
