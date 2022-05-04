import React from 'react'
import './navbar.css'

const NavBar = () => {
  return (
    <div className='navbar' >
       <div className="navContainer">
         <a href="/"> <span className="logo" >
               <strong>BookingNepal</strong> </span>
           </a> 
           <div className="navite">
               <button className="navButton">Register</button>
               <button className="navButton">Login</button>
           </div>
       </div>

    </div>
  )
}

export default NavBar