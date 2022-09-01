import React from 'react'
import './Works.css'
import Worktemplate from './worktemplate.js'
import { Link} from 'react-router-dom'



export default function Works() {
  return (

    <section className='works-container'>

      

      <Worktemplate 
      client="bombshellsa.com" 
      text="Bombshell™️. Shopping and retail. SOURCED Globally | Supplied locally. Original Dr Martens from abroad"
      link="https://www.bombshellsa.com/"
      pic="./images/websites/Image 2.png"

      />


<Worktemplate 
      client="agencyone.fr" 
      text="We are a digital agency specialized in websites, mobile applications and design"
      link="https://agencyone.fr/"
      pic="./images/websites/Image 3.png"

      

      />



      
<Worktemplate 
      client="Showtag.tv" 
      text="Showtag is an innovative editorial platform designed to help make your videos come to life through true storytelling magic. Your ad, your TV Show"
      link="https://showtag.tv/solutions/commercial/"
      pic="./images/websites/Image 1.png"

      />






<div className='works-button-section'>

    
<Link className='works-button' to="allworks"> More projects</Link>
    
    </div>

    </section>
    
  )
}
