import React, { useEffect, useContext, useReducer } from 'react';
import axios from 'axios';

import CryptoContext from './CryptoContext.js'
import CryptoReducer from './CryptoReducer.js'

import {
  GET_CRYPTO_LIST
} from '../types.js'

const apiURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'

// const serverURL = 'http://localhost:4000'

const CryptoState = (props) => {
  const initialState = {
    cryptoList: []
  }

  const [state, dispatch] = useReducer(CryptoReducer, initialState)

  useEffect(() => {
    getCryptoList()
  }, [])

  const getCryptoList = () => {
    axios.get(`${apiURL}`)
      .then((result) => {

        dispatch({
          type: GET_CRYPTO_LIST,
          payload: result.data
        })
      })
  }

  return (
    <CryptoContext.Provider value={{ cryptoList: state.cryptoList, getCryptoList }}>
      {props.children}
    </CryptoContext.Provider>
  )
}

export default CryptoState