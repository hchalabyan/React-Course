import React, { Component } from 'react';
import MainComponent from "../src/components/MainComponent/MainComponent"
import Button from "../src/components/Button/Button" 
import InputsForLyfeSicles from "../src/components/InputsForLyfeSicles/InputsForLyfeSicles"


import './App.css';

import Watch from "../src/components/index"
 
class App extends Component { 
  state={
    showStatus:'block'
  }
  
  close = ()=>{
    this.setState({
      showStatus:'none' 
    })
      
    
    
  }
  render() {
    return (
      <div className="App">
      {/* <Watch/> */}
        <MainComponent  status = {this.state.showStatus}/> 
        <Button name = "close" click = {this.close}/>

        <InputsForLyfeSicles/>
      </div>
    );
  }
}

export default App;
