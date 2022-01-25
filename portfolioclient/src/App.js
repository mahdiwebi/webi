import React from 'react'
import './App.css'
import Contact from './PortfolioContainer/contact/Contact'
import Section from './PortfolioContainer/sectionHeader'
import Home from './PortfolioContainer/Home/Home'
import Vision from './PortfolioContainer/Home_following/vision'
import Logo from './PortfolioContainer/logoMW/Logo'
import Navbar from './PortfolioContainer/Navbar/Navbar'
import Services from './PortfolioContainer/services_component/services'
import Works from './PortfolioContainer/works/Works'
import ReviewsSlider from './PortfolioContainer/Testimonials/ReviewsSlider'
import PartnerSlider from './PortfolioContainer/clients/PartnersSlider'
import TechSlider from './PortfolioContainer/services_component/TechSlider'


function App() {
  return (
    <div className="main-container">
      <div className='oneline'>
       <Logo />
      <Navbar />
      </div>
      <Home />
      <Vision/>

      <Section
      title="Services"
      subtitle='OUR SERVICES FOR CLIENTS'
      />

      <Services />
      <TechSlider/>
     

      <Section
      title="Works"
      subtitle="THINGS WE'VE MADE"
      />
      

   
      

      <Works />

      <Section
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
  )
}

export default App
