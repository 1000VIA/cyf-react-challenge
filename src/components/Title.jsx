import React, { Component } from 'react'
// import Button from './Button'

class Title extends Component {
  render() {
    return (
      <h3>What's the capital of {this.props.countryName}</h3>
    )
  }
}

export default Title;
