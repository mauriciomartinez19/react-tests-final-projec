import './TopNavbar.css'
import restlogo from './restlogo.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";

const TopNavbar = (setIsAuthenticated) => {

  const [scrollState, setScrollState] = useState("top")
  const [userName, setUserName] = useState(false)
  const [dropdown, setDropdown] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    setUserName(false)
  }

  useEffect(() => {

    const token = localStorage.getItem('token')

    if (token) {
      let decoded = jwt_decode(token)
      const name = decoded.name
      setUserName(name)
      console.log(decoded)
    }

    const listener = document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop
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
  }, [scrollState, userName])
  if (scrollState === "top") {
    return <nav className="navbar-box">
      <img src={restlogo} className='restlogo' alt='ubuntu-logo' />
      <ul className='list'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/admin-contacts'>Testimonial</Link>
        {userName ? <div>
          <button className="dropbtn" onClick={() => setDropdown(!dropdown)}>{userName}</button>
          {dropdown ? <div className="dropdown-content">
            <a href='/' onClick={() => logout()}>Logout</a>
          </div>
            : <></>
          }

        </div>
          : <Link to='/login'>Sign Up</Link>}
      </ul>
    </nav>
  }
  else {
    return <nav className="navbar-box-bot">
      <img src={restlogo} className='restlogo' alt='ubuntu-logo' />
    </nav>
  }
}

export default TopNavbar