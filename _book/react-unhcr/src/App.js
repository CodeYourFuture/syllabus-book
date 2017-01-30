import React, { Component } from 'react';
// import fetch from 'fetch';
import logo from './images/cyf.png';
import './styles/App.css';
import CountriesList from './components/CountriesList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesList: [],
      countryData: {}
    }
  }
  render() {
    return (
      <div className="App">
        <div className="app-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>UNHCR Data Browser</h2>
        </div>
        <div className="app-search-box">
          <div>
            <CountriesList countries={this.state.countriesList} />
          </div>
          <div>
            <button onClick={()=>alert('Not implemented')} type="submit">Retrieve Country statistics</button>
          </div>
        </div>
        <div className="app-country-statistics">
          <strong>Country: </strong>{this.state.countryData.country_of_residence_en}<br/>
          <strong>Year: </strong>{this.state.countryData.year}<br/>
          <strong>Female Refugees: </strong>{this.state.countryData.female_total_value}<br/>
          <strong>Male Refugees: </strong>{this.state.countryData.male_total_value}<br/>
        </div>
      </div>
    );
  }
  componentDidMount() {
      this.getCountriesList();
      this.getCountryStatistics('TUR', '2013');
  }
  getCountriesList() {
    fetch('http://data.unhcr.org/api/stats/country_of_residence.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ countriesList: data } );
      });
  }
  getCountryStatistics(countryCode, year) {
    const url = 'http://data.unhcr.org/api/stats/demographics.json?country_of_residence=' + countryCode + '&year=' + year;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      //The data comes back as an array, we take the first element of the array as it contains our country data
      this.setState({ countryData: data[0]})
    })
  }
}

export default App;
