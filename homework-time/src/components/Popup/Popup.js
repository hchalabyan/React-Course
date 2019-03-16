import React, {Component} from "react";
import "./Popup.css";

class Popup extends Component{
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className= "popup-wrapper">
                <div  className = "popup">
                    {this.props.children}
                    <h1>{this.props.text1}</h1>
                    <p>{this.props.text2}</p>
                </div>
            </div>    
        );

    }
}
export default Popup;