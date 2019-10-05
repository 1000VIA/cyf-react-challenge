import React, { Component } from 'react';
import { isDoExpression } from '@babel/types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomCities: [],
      countrys: [{ "name": "Afghanistan", "capital": "Kabul" },
      { "name": "Aland Islands", "capital": "Mariehamn" },
      { "name": "Albania", "capital": "Tirana" },
      { "name": "Algeria", "capital": "Algiers" },
      { "name": "American Samoa", "capital": "Pago Pago" },
      { "name": "Andorra", "capital": "Andorra la Vella" },
      { "name": "Angola", "capital": "Luanda" },
      { "name": "Anguilla", "capital": "The Valley" },
      { "name": "Antigua and Barbuda", "capital": "St. John's" },
      { "name": "Argentina", "capital": "Buenos Aires" },
      { "name": "Armenia", "capital": "Yerevan" },
      { "name": "Aruba", "capital": "Oranjestad" },
      { "name": "Australia", "capital": "Canberra" },
      { "name": "Austria", "capital": "Vienna" },
      { "name": "Azerbaijan", "capital": "Baku" },
      { "name": "Bahamas", "capital": "Nassau" },
      { "name": "Bahrain", "capital": "Manama" },
      { "name": "Bangladesh", "capital": "Dhaka" },
      { "name": "Barbados", "capital": "Bridgetown" },
      { "name": "Belarus", "capital": "Minsk" },
      { "name": "Belgium", "capital": "Brussels" },
      ]
    }
  }
  randomCoutrys = () => {
    const countries = [];
    for (let i = 0; i < 5; i++) {
      const index = Math.round(Math.random() *
        (this.state.countrys.length - 0) + 0);
      const country = this.state.countrys[index];
      countries.push(country)
    }
    return countries
  }
  componentDidMount() {
    const randomCities = this.randomCoutrys();
    this.setState({
      randomCities: randomCities
    })
  }
  render() {
    return (
      this.state.randomCities.map((country, index) => {
        return <button key={index}>{country.name}</button>
      }))
  }
}

export default Button;
