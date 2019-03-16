import React, {Component, Fragment} from "react";
import "./MainComponent.css";
import Popup from '../Popup/Popup'

class MainComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            name: 'sarasd',
            text:"sajfsdkf dgsdbh"
  
        };
    }
   
    render () {
        return (
            <div className = 'MainComponent' style={{display:this.props.status, color:'green'}}>
                <Popup>
                    <h1>{this.state.name}</h1>
                    <p>{this.state.text}</p>
                </Popup>
               
            </div>
            
        );

    }
}
export default MainComponent;