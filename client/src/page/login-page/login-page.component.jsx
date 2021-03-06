import React, { useState, useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext.js';
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

import './login-page.styles.scss';

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  })
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const notify = () => toast(`Logged in!`, {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    className: 'toasty-background'
    })

  const handleChange = ({ target: { name, value }}) => {
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(formData.password !== formData.password2) {
      alert('Passwords are not matching. Please try again')
    }

    try {
      await loginUser(formData.email, formData.password)
      navigate('/')
      notify();
    } catch {
      setError('Failed to login')
    }
  }

  return (
    <div className="login-page-container">
      <div className="login-page-container-mid">
      <h2>Login</h2>
      <form className="form-input" onSubmit={handleSubmit}>
        {/* <input className="input" type="text" name="username" value={formData.username} placeholder="Enter Username" onChange={handleChange}/> */}
        <input className="input" type="email" name="email" value={formData.email} placeholder="Enter Email" onChange={handleChange}/>
        <input className="input" type="password" name="password" value={formData.password} placeholder="Enter Password" onChange={handleChange}/>
        <input className="input" type="password" name="password2" value={formData.password2} placeholder="Enter Password Again" onChange={handleChange}/>
        <button className="register-button" type="submit">Login</button>
      </form>
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
      <div>Don't have an account? <Link to="/register" style={{ color: 'white'}}>Register</Link></div>
      </div>
    </div>
  )
}

export default LoginPage;