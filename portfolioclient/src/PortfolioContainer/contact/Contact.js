import React from 'react'
import './Contact.css'
export default function Contact() {
  return (
    <section className="contact-container" id='contact'>

      <div className='contact-title heading2'>
      Do you have any <br></br>project in your mind

      </div>


      
      <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mahdi.kaaniche1998@gmail.com" className='contact-button'>
    
      Get in touch
      </a>


      <div className="contact-icons">
          <a href="https://www.linkedin.com/in/mahdi-kaaniche-web-dev/">
            <div className="linkedin"></div>
          </a>
          <a href="https://www.instagram.com/mahdi_webi/">
            <div className="insta"></div>
          </a>
          <a href="https://www.upwork.com/freelancers/~0142db5643926d7942?viewMode=1">
            <div className="upwork"></div>
          </a>
          <a href="https://www.fiverr.com/mahdikaanich916?up_rollout=true">
            <div className="fiverr"></div>
          </a>
        </div>


        <div className="contact-details">


          <div className='contact-details-phone'>
          <div className="tel"></div>
          <div className='heading5'>+216 26 194 035</div>
          </div>


          <div className='contact-details-email'>
          <div className="email"></div>
          <div className='heading5'>mahdi.kaaniche1998@gmail.com</div>
          </div>

          <div className='contact-details-location'>
          <div className="position"></div>
          <div className='heading5'>Tunisia</div>
          </div>
        
        </div>


        <div className='contact-copyright'>Copyright © 2022 | Mahdi.webi</div>
      
      



   
      
    </section>
  )
}
