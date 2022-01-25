import React from "react";
import './section.css'
const Section = (props) => (


<div className="section-heading">
        
          
        <div className="global-heading-title heading2"> {props.title} </div>

     
      
      <div className="global-heading-text">{props.subtitle}</div>
      
    </div>

    

    

);

export default Section;