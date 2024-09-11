import React from 'react'
import logo from '../img/logo.jpeg'
import '../styles/Header.css'

function Header() {
  return (
    <div>
       <div className='header'>
        <img className='logo' src={logo} alt="Nosara House Management" />
        <h1>NOSARA HOUSE MANAGEMENT</h1>
       </div>
    </div>
  )
}

export default Header