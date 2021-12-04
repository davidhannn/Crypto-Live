import React, { useContext } from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import AuthContext from '../../context/auth/AuthContext';
import Searchbar from '../searchbar/searchbar.component.jsx';
import { ToastContainer, toast } from 'react-toastify';

import './navbar.styles.scss';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const notify = () => toast(`Logged out!`, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    className: 'toasty-background'
    })

  const handleLogout = () => {
    logoutUser();
    notify();
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
        <div className="navbar-left">
          <Searchbar />
        </div>
        <div className="navbar-right">
          <Link to="/" style={{textDecoration: 'none', color: 'white'}}>
            <li >Home</li>
          </Link>
          {!user ? normalRoutes() : privateRoutes()}
          <ToastContainer
            position="top-right"
            autoClose={1500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover/>
          </div>
      </ul>
    </nav>
  )
}

export default Navbar;