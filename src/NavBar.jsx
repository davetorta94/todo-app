import React from 'react'
import { Link, NavLink } from "react-router-dom";

//<div className=' container-fluid bg-black navheight d-flex position-fixed rounded-3 justify-content-around'>

export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Productivity</Link>

    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

         <NavLink className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }`}
          to="/">
            Home
         </NavLink>

        
          
          
      </ul>
    </div>
  </div>
</nav>

  )
}


