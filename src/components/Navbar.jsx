
import React from 'react'
import './Navbar.css'
import { LOGO_URL } from '../utils/constants'
const Navbar = () => {
  return (
    <div id='Navbar'>


        <div>
            <img src={LOGO_URL} alt="" />
        </div>
        <div className='navItem'>

            <h3>Home</h3>
            <h3>About US</h3>
            <h3>Cart</h3>
            <h3>Contact US</h3>
            
        </div>
    </div>
  )
}

export default Navbar