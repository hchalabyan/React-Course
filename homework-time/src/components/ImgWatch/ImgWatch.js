import React from 'react';
import clockface from "../../assets/img/clockface.gif"
import  "./ImgWatch.css"

const ImgWatch = function(props) {
	const x = props.time;
    const styles = { 
        transform: `rotate(${x}deg)` 
    };
      return (
        <div className="ImgWatch">
         	<div className = "overlay" style={styles}>
          		<div className = "arrow"></div>
        	</div>
        	<img src={clockface} alt=""/>
            
        </div>
      );
  }
  
  export default ImgWatch;
