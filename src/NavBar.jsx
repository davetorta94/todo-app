import React from 'react'
import { Link, NavLink } from "react-router-dom";



export const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <div className="container-fluid p-0">
    <Link className="navbar-brand" to="/">Productivity</Link>

    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

         

        
          
          
      </ul>
    </div>
  </div>
</nav>

  )
}


//</ul><NavLink className={ ({isActive}) =>  `nav-link ${ isActive ? 'active' : '' }`}
         //</ul> to="/">
         //</ul>   Home
         //</ul></NavLink>