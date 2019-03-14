import React, { Component } from 'react';
import Clock from "./Clock"

import './App.css';

import Watch from "../src/components/index"

class App extends Component {
  state = {
    clicked: false
  }
  deleteComponent = () => {
    this.setState({
        clicked: true
    })
}
  render() {
    return (
      <div className="App">
        <Watch/>
        {this.state.clicked ? null : <Clock/>}
        <button onClick={this.deleteComponent}>Click</button>
      </div>
    );
  }
}

export default App;
