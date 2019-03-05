import React, { Component } from 'react';

import Inputs from "./Inputs/Inputs";
import ImgWatch from "../components/ImgWatch/ImgWatch"

class Watch extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: '1',
          time:0
      };

    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleSubmit(event){
      this.setState({time: this.state.value});
    }
    handleChange(event){
     
        this.setState({value: event.target.value});
      
    }
    render() {
    
    return (
        <div className="Watch">
          <Inputs clickHandler={this.handleSubmit} onChangeHandler = {this.handleChange} value = {this.state.value}/>
          <ImgWatch time = {this.state.time}/>
        </div>
      );
    }
  }
  
  export default Watch;