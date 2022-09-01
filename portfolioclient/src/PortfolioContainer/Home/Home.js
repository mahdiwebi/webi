import React from 'react'
import './Home.css'
import './headinganimation'



export default function Home() {
  return (
    
    <section className="Home-container" id="home">

      <div className="home-picture-mobile"><img src='./images/my_picture.png' ></img></div>


      <div className='Home-details'> 
      <h5 className="Home-details-title" >Creative mind, creative works</h5>
      
      <div className="Home-details-text">

          <span className='text-animate'>Mahdi web</span>  
         
         <span><span className="txt-type" data-wait="3000" data-words='["Developer" , "Designer"]' ></span></span>
       
         <p className='bio heading5'>WordPress & Js developer, passionate about innovation and building web apps that make people life easier 
</p>
          </div>

          <a className="button-CTA" href="./Mahdi webi Resume.pdf">Resume<i class="fa fa-download" aria-hidden="true"></i></a>
          

      </div>

      <div className='Home-picture'>

      <div className="profile-picture"></div>

      </div>
    
        
      </section>

  )
}
