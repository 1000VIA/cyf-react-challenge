import React, { Component } from 'react'
import Button from './components/Button'
import Title from './components/Title'

class App extends Component {
  state = {
    countrysName: 'Colombia'
  }
  render() {
    return <div className="App" >
      <Title countryName={this.state.countrysName} />
      <Button />

    </div>
  }
}

export default App;
