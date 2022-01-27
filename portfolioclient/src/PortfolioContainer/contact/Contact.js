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
          <a href='https://www.google.fr/maps/place/R%C3%A9sidence+Kmar/@34.7770193,10.7773706,3a,121.5y,90t/data=!3m8!1e2!3m6!1sAF1QipPgWLnS49NKIy8mKPI2VqbystfHTFiaQk9Zg4fo!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPgWLnS49NKIy8mKPI2VqbystfHTFiaQk9Zg4fo%3Dw117-h86-k-no!7i720!8i529!4m5!3m4!1s0x1301d38c8f1ec0db:0xc04b87f5d9fd9ae1!8m2!3d34.7769981!4d10.7774311'>
              <div className='heading5'>Tunisia-Sfax</div>
          </a>
          </div>
        
        </div>


        <div className='contact-copyright'>Copyright © 2022 | Mahdi.webi</div>
      
      



   
      
    </section>
  )
}
