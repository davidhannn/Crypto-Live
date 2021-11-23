import React from 'react';

import './navbar.styles.scss';

const Navbar = () => {

  return (
    <nav>
      <li className="navbar-container">
        <ul>Home</ul>
        <ul>Favorites</ul>
        <ul>Login</ul>
      </li>
    </nav>
  )
}

export default Navbar;