import React, { useReducer } from 'react'
import AuthContext from './AuthContext.js'
import AuthReducer from './AuthReducer.js'

import {
  LOGIN_USER,
  REGISTER_USER
} from '../types';

const AuthState = (props) => {
  const initialState = {
    user: {}
  }

  const [state, dispatch] = useReducer(AuthReducer, initialState)

  const registerUser = (form) => {
    return console.log(form);
    // dispatch({
    //   type: REGISTER_USER,
    //   payload:
    // })
  }

  return (
    <AuthContext.Provider value={{ user: state.user, registerUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState