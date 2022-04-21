import React from 'react'
import PropTypes from 'prop-types'
import logo from './logo.png';

import { Link } from "react-router-dom";
import Home from './Home';


function Header(props) {
  return (
    <div className="header-container">
     
     
   <header>
   <ul className="HeaderLinks">
      <li> <Link to="/"><img className="logo rotate" src={logo} alt="My logo" /></Link>  </li>
      <li className="list"><Link to="/Story">Story</Link></li>
          <li className="list"><Link to="Roadmap">Roadmap</Link></li>
          <li className="list"><Link to="Utilities">Utilities</Link></li>
          <li className="list"><Link to="AboutUS">AboutUS</Link></li> 
          <li>  </li></ul>
   </header>
      
      
          
          
    </div>
  )
}

Header.propTypes = {

}

export default Header

