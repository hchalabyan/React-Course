import React, { Component } from 'react';
import  "./Inputs.css"

const inputs = function(props) {
      return (
        <div className="Inputs">
          <input type="text" onChange={props.onChangeHandler} value = {props.value}/>
          <button onClick = {props.clickHandler}>Show time</button>
        </div>
      );
  }
  
  export default inputs;
  