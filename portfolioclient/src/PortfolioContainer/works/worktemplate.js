import React from 'react'
import './Works.css'



export default function Worktemplate(props) {
  return (


   <div className='portfolio'>
   <div className='portfolio-sample'>
       <img src={props.pic}></img>
       </div>

     <div className='portfolio-details'>

     <div className="portfolio-details-title heading3"> {props.client} </div>
            <div className="portfolio-details-underline"></div>

       <div className='portfolio-details-text heading5'>

       {props.text}
       </div>


       <a className='button-works' href={props.link}>view the website</a>
            
          

      </div>

      

   </div>




   







    
  )
}
