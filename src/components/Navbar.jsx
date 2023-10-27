
import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div  className="flex justify-between  pl-10 pr-10  shadow-md bg-orange-100 items-center pt-3 pb-3"     >
        <div>
            <img  className="w-24" src={LOGO_URL} alt="" />
        </div>
        <div  className="flex justify-between gap-10">

        <Link to="/">  <h3 >Home</h3> </Link>
         
            <Link to="/aboutUs">  <h3>About US</h3> </Link>
          
            <h3 >Cart</h3>

            <Link to="/contactUs">
            <h3 >Contact US</h3>
            </Link>
            
        </div>
    </div>
  )
}

export default Navbar