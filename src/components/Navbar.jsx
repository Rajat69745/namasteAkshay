
import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'
import '../../index.css'
const Navbar = () => {
  return (

    <div  className="flex" >
        <div>
            <img  className="w-14" src={LOGO_URL} alt="" />
        </div>
        <div >

        <Link to="/">  <h3 >Home</h3> </Link>
         
            <Link to="/aboutUs">  <h3>About US</h3> </Link>
          
            <h3 class="text-3xl font-bold underline">Cart</h3>

            <Link to="/contactUs">
            <h3 >Contact US</h3>
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar