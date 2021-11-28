import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext.js';
import './register-page.styles.scss';

const RegisterPage = () => {
  const { registerUser } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    password2: ''
  })
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [password2, setPassword2] = useState('')


  const handleChange = ({ target: { name, value }}) => {
    setFormData({ ...formData, [name]: value })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if(formData.password !== formData.password2) {
      alert('Passwords are not matching. Please try again')
    }

    try {
      await registerUser(formData.email, formData.password)
      navigate('/')
    } catch {
      setError('Failed to create account')
    }
  }

  return (
    <div className="register-page-container">
    <div className="register-page-container-main">
      <h2>Register</h2>
      <form className="form-input" onSubmit={handleSubmit}>
        {/* <input className="input" type="text" name="username" value={formData.username} placeholder="Enter Username" onChange={handleChange}/> */}
        <input className="input" type="email" name="email" value={formData.email} placeholder="Enter Email" onChange={handleChange}/>
        <input className="input" type="password" name="password" value={formData.password} placeholder="Enter Password" onChange={handleChange}/>
        <input className="input" type="password" name="password2" value={formData.password2} placeholder="Enter Password Again" onChange={handleChange}/>
        <button className="register-button" type="submit">Register</button>
      </form>

      <div>Have an account? <Link to="/login" style={{ color: 'white'}}>Log in</Link></div>
    </div>
    </div>
  )
}

export default RegisterPage