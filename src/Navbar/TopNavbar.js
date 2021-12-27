import './TopNavbar.css'
import restlogo from './restlogo.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const TopNavbar = () => {

  const [scrollState, setScrollState] = useState("top")

  useEffect(() => {
    const listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState !== "amir") {
          setScrollState("amir")
        }
      } else {
        if (scrollState !== "top") {
          setScrollState("top")
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState])
  if (scrollState === "top") {
    return <nav className="navbar-box">
      <img src={restlogo} className='restlogo' />
      <ul className='list'>
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/reviews'>Reviews</Link>
        <Link to='/tours'>Tours</Link>
      </ul>
    </nav>
  }
  else {
    return <nav className="navbar-box-bot">
      <img src={restlogo} className='restlogo' />
    </nav>
  }
}

export default TopNavbar