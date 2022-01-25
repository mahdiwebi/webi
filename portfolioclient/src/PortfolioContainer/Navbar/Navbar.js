import React, { useState, useEffect } from 'react'
import './Navbar.css'


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


      <nav>
        {(showMenu || desktopScreen > 500) && (
          <ul className="list">
            <a href="#home">
              <li className="items">Home</li>
            </a>
            <a href="#sc">
              <li className="items"> Services</li>
            </a>
            <a href="#works">
              <li className="items" href="#works">
                Works
              </li>
            </a>
            <a href="#testimonials">
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
      </nav>
    </div>
  )
}
