import './TopNavbar.css'
import restlogo from './restlogo.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import styled from "styled-components"

const TopNavbar = () => {

  const [scrollState, setScrollState] = useState(true)
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
    }

    const listener = document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 120) {
        if (scrollState) {
          setScrollState(false)
        }
      } else {
        if (!scrollState) {
          setScrollState(true)
        }
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [scrollState, userName])
  return <NavbarBox scrollState={scrollState}>
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
  </NavbarBox>
}

const NavbarBox = styled.nav`
    z-index: 99999;
    position: fixed;
    width: 100%;
    height:${props => props.scrollState ? '50px' : '35px'};
    background-color: ${props => props.scrollState ? 'transparent' : 'rgb(265 265 265 / 90%)'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    transition: 0.3s;
`
export default TopNavbar