import React, { useEffect, useContext, useReducer } from 'react';
import axios from 'axios';

import CryptoContext from './CryptoContext.js'
import CryptoReducer from './CryptoReducer.js'

import {
  GET_CRYPTO_LIST,
  GET_CRYPTO_DATA
} from '../types.js'

const apiURL = 'https://api.coingecko.com/api/v3/coins/'
// const serverURL = 'http://localhost:4000'

const CryptoState = (props) => {
  const initialState = {
    cryptoList: [],
    cryptoData: {}
  }

  const [state, dispatch] = useReducer(CryptoReducer, initialState)

  useEffect(() => {
    getCryptoList()
  }, [])

  const getCryptoList = () => {
    axios.get(`${apiURL}/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false'`)
      .then((result) => {

        dispatch({
          type: GET_CRYPTO_LIST,
          payload: result.data
        })
      })
  }

  const getCryptoData = (name) => {
    axios.get(`${apiURL}/${name}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false'`)
      .then((result) => {
        dispatch({
          type: GET_CRYPTO_DATA,
          payload: result.data
        })
      })
  }

  return (
    <CryptoContext.Provider value={{ cryptoList: state.cryptoList, cryptoData: state.cryptoData, getCryptoList, getCryptoData }}>
      {props.children}
    </CryptoContext.Provider>
  )
}

export default CryptoState