import React, { useReducer, useEffect } from 'react'
import AuthContext from './AuthContext.js'
import AuthReducer from './AuthReducer.js'

import { auth, db } from '../../firebase/firebase.js'

import {
  LOGIN_USER,
  REGISTER_USER,
  LOGOUT_USER
} from '../types';

const AuthState = (props) => {
  const initialState = {
    user: {},
    loading: true
  }
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {

      dispatch({
        type: LOGIN_USER,
        payload: user
      })
    })

    return unsubscribe
  }, [])

  const registerUser = async (email, password) => {
    try {
      const res = await auth.createUserWithEmailAndPassword(email, password)
      const user = res.user;
      console.log(user)
      await db.collection("users").add({
        uid: user.uid,
        authProvider: 'local',
        email
      })
      auth.onAuthStateChanged(user => {
        dispatch({
          type: REGISTER_USER,
          payload: user
        })
      })
    } catch (err) {
      console.error(err)
      alert(err.message);
    }

  }

  const loginUser = (email, password) => {
    auth.signInWithEmailAndPassword(email, password)
    // return console.log(form);
    // dispatch({
    //   type: REGISTER_USER,
    //   payload:
    // })
    auth.onAuthStateChanged(user => {
      dispatch({
        type: LOGIN_USER,
        payload: user
      })
    })
  }

  const logoutUser = () => {
    auth.signOut();
    // return console.log(form);
    // dispatch({
    //   type: REGISTER_USER,
    //   payload:
    // })
    dispatch({
      type: LOGOUT_USER,
      payload: null
    })
  }



  return (
    <AuthContext.Provider value={{ user: state.user, loading: state.loading, registerUser, loginUser, logoutUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState