import React from 'react'
import './App.css'
import Contact from './PortfolioContainer/contact/Contact'
import Section from './PortfolioContainer/sectionHeader'
import Home from './PortfolioContainer/Home/Home'
import Vision from './PortfolioContainer/Home_following/vision'
import Navbar from './PortfolioContainer/navbar/Navbar'
import Services from './PortfolioContainer/services_component/services'
import Works from './PortfolioContainer/works/Works'
import ReviewsSlider from './PortfolioContainer/Testimonials/ReviewsSlider'
import PartnerSlider from './PortfolioContainer/clients/PartnersSlider'
import TechSlider from './PortfolioContainer/services_component/TechSlider'


function App() {
  return (
    <div className='second-container'>
       <pre class="hacking-animation__text">
    </pre>
    <div className="main-container">
      
     
     <Navbar />
     

      <Home />
      <Vision/>

      <Section
      ID='Services'
      title="Services"
      subtitle='OUR SERVICES FOR CLIENTS'
      />

      <Services />
      <TechSlider/>
     

      <Section
      ID='works'
      title="Works"
      subtitle="THINGS WE'VE MADE FOR OUR CLIENTS"
      />

      <Works />

      <Section
      ID='Testimonials'
      title="Testimonials"
      subtitle="OUR SERVICES FOR CLIENTS"
      />
      <ReviewsSlider/>

      <Section
      title="Our clients"
      subtitle="OUR SERVICES FOR CLIENTS"
      />

      <PartnerSlider/>
       
     
      <Contact />
      </div>
    </div>
  )
}

export default App
