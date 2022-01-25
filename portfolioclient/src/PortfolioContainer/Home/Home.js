import React from 'react'
import './Home.css'
import './headinganimation'



export default function Home() {
  return (
    
    <section className="Home-container" id="home">

      <div className="home-picture-mobile"></div>


      <div className='Home-details'> 
      <h5 className="Home-details-title" >Creative mind, creative works</h5>
      
      <div className="Home-details-text">

          <span className='text-animate'>I'm Mahdi web</span>  
         
         <span className="txt-type text-animate1" data-wait="3000" data-words='["Developer" , "Designer" , "creator"]' ></span>
       
          </div>

          <a className="button-CTA" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mahdi.kaaniche1998@gmail.com">Resume<i class="fa fa-download" aria-hidden="true"></i></a>


      </div>

      <div className='Home-picture'>

      <div className="profile-picture"></div>

      </div>
    
        
      </section>

  )
}
