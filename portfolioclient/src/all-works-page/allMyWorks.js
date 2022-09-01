import React from 'react';
import Worktemplate from '../PortfolioContainer/works/worktemplate'
import '../PortfolioContainer/works/Works.css'
import { Link } from 'react-router-dom'
import '../PortfolioContainer/Home/Home.css'


export default function AllWorks() {
  return (

      <section className='works-container' style={{marginTop:'5px'}}>

<Worktemplate 
      client="Showtag.tv" 
      text="Showtag is an innovative editorial platform designed to help make your videos come to life through true storytelling magic. Your ad, your TV Show"
      link="https://showtag.tv/solutions/commercial/"
      pic="./images/websites/Image 1.png"

      />
      

      <Worktemplate 
      client="Bombshellsa.com" 
      text="Bombshell™️. Shopping and retail. SOURCED Globally | Supplied locally. Original Dr Martens from abroad"
      link="https://www.bombshellsa.com/"
      pic="./images/websites/Image 2.png"

      />


<Worktemplate 
      client="Agencyone" 
      text="We are a digital agency specialized in websites, mobile applications and design"
      link="https://agencyone.fr/"
      pic="./images/websites/Image 3.png"

      />



<Worktemplate 
      client="Jeffhawkinsphotography" 
      text=" Jeff Hawkins Photography We create images that are designed to set you apart from your competition. Jeff Hawkins Photography In-camera Art Direction."
      link="https://jeffhawkinsphotography.com.au/project/creative_resort"
      pic="./images/websites/Image 4.png"

      />

<Worktemplate 

client="Digital-pilot" 
text=" JWe cover all the bases for web, including managed cloud hosting (with weekly updates for WP, PHP an plugins), local SEO, web development, Google Ads"
link="https://digital-pilot.ca/"
pic="./images/websites/Image 5.png"


/>


<Worktemplate 

client="Imaginif" 
text="We specialize in retail and store design. Founded in 1989 and operating from Brussels, Jakarta & Bali.
We deliver our designs remote online, worldwide"
link="https://imaginif.com/"
pic="./images/websites/Image 6.png"


/>





<Link to="/" className='button-CTA'>Return</Link>

    </section>
    
  );
}
