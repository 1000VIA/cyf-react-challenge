import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const cities = [];
    const index = Math.round(Math.random() * (5 - 0) + 0);

    // this.setState({
    //   // countrys:
    // })
    const city = cities[index];
    console.log(index);
    return index
  }




  render() {
    console.log(this.state.countrys.length);

    return (
      this.state.countrys.map((country, indice) => <button key={indice}>{this.randomCoutrys()}</button>)

    );
  }
}

export default Button;


// const index = Math.random(Math.random() * (cities.length - 0) + 0)  randomCities.push(cities[index])

// const indice = indexOf(this.state.countrys) === index ? this.state.countrys.name : undefined;
