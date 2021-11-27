import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext';

import './navbar.styles.scss';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser();
  }

  const normalRoutes = () => {
    return (
      <>
      <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>
        <li>Login</li>
      </Link>
      <Link to="/register" style={{textDecoration: 'none', color: 'white'}}>
        <li>Register</li>
    </Link>
    </>
    )
  }

  const privateRoutes = () => {
    return (
      <>
      <Link to="/favorites" style={{textDecoration: 'none', color: 'white'}}>
        <li>Favorites</li>
      </Link>
       <Link to="/login" style={{textDecoration: 'none', color: 'white'}}>
        <li onClick={handleLogout}>Log Out</li>
      </Link>
      </>
    )
  }

  return (
    <nav>
      <ul className="navbar-container" style={{ listStyle: 'none'}}>
        <div className="navbar-right">
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <li >Home</li>
          </Link>
          {!user ? normalRoutes() : privateRoutes()}
          </div>
      </ul>
    </nav>
  )
}

export default Navbar;