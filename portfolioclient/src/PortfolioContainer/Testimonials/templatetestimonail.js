import React from 'react'
import './Testimonials.css'



export default function Testimonialtemplate(props) {
  return (


    <div className="box">
    
      <div className="client-photo"></div>
      <div className="client-name">{props.Clientname}</div>
      <div className="client-brand">{props.Clientbrand}</div>
      <div className="client-review heading5">  {props.Clientreview}</div>
   

      <div className="client-rating">
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </div>
      
    </div>


      





   







    
  )
}
