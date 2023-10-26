
import React from 'react'
import './Navbar.css'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div id='Navbar'>


        <div>
            <img src={LOGO_URL} alt="" />
        </div>
        <div className='navItem'>

        <Link to="/">  <h3>Home</h3> </Link>
         
            <Link to="/aboutUs">  <h3>About US</h3> </Link>
          
            <h3>Cart</h3>

            <Link to="/contactUs">
            <h3 >Contact US</h3>
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar