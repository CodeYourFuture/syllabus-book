import React, { Component } from 'react';

class CountriesList extends Component {
  render() {
    const countries = this.props.countries;
    return (<select>
      {
        countries.map((country, index) => {
          return(
            <option value={country.country_of_residence} key={index}>
              {country.country_of_residence_en}
            </option>
          )
        })
      }
    </select>)
  }
}

export default CountriesList;
