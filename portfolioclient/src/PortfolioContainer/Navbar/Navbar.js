import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'


export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  const [desktopScreen, setDesktopScreen] = useState(window.innerWidth)
  const showMenuNav = () => {
    setShowMenu(!showMenu)
  }
  useEffect(() => {
    const changeWidth = () => {
      setDesktopScreen(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])
  return (
    <div className="navbar-container" id="navbar">
   <div className="logo" ><Link to='/'> <img src='./images/webi.png'></img></Link></div>

     

      <div className='navigation'>
        {(showMenu || desktopScreen > 780) && (
          <ul className="list">
            <a href="#home">
              <li className="items">Home</li>
            </a>
            <a href="#Services">
              <li className="items"> Services</li>
            </a>
            <a >
              <li className="items">
              <Link to="allworks"> works</Link>
              </li>
            </a>
            <a href="#Testimonials">
              <li className="items">Testimonials</li>
            </a>
            <a href="#contact">
              <li className="items">Contact</li>
            </a>
          </ul>
        )}

        <a href="#navbar" className="toggle-button" onClick={showMenuNav}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
      </div>


    </div>
  )
}
