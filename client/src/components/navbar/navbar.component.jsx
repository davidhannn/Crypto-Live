import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'

import './navbar.styles.scss';

const Navbar = () => {

  return (
    <nav>
      <ul className="navbar-container" style={{ listStyle: 'none'}}>
        <div className="navbar-right">
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <li >Home</li>
          </Link>
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <li>Favorites</li>
          </Link>
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <li>Login</li>
          </Link>
          </div>
      </ul>
    </nav>
  )
}

export default Navbar;