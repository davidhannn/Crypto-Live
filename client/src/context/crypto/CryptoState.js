import React, { useEffect, useContext, useReducer } from 'react';
import axios from 'axios';

import CryptoContext from './CryptoContext.js'
import CryptoReducer from './CryptoReducer.js'

import {
  GET_CRYPTO_LIST,
  GET_CRYPTO_DATA,
  GET_CRYPTO_HISTORY,
  SORT_CRYPTO_DATA,
  SEARCH_CRYPTO_DATA
} from '../types.js'

const apiURL = 'https://api.coingecko.com/api/v3/coins/'
// const serverURL = 'http://localhost:4000'

const CryptoState = (props) => {
  const initialState = {
    cryptoList: [],
    cryptoData: {},
    cryptoHistory: []
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

   const getCryptoHistory = async (name, days) => {
    const data = await axios.get(`${apiURL}/${name}/market_chart`, {
      params: {
        vs_currency: "usd",
        days: days
      }
    })

    dispatch({
      type: GET_CRYPTO_HISTORY,
      payload: data.data.prices
    })
   }

   const sortCryptoData = (sortVal) => {
      axios.get(`${apiURL}/markets?vs_currency=usd&order=${sortVal}&per_page=20&page=1&sparkline=false'`)
      .then((result) => {
        dispatch({
          type: SORT_CRYPTO_DATA,
          payload: result.data
        })
      })
   }

   const searchCrypto = (letter) => {
     console.log(letter)
     const searchedCryptos = state.cryptoList.map(({ id }) => {
       return id.includes(letter)
     })
      dispatch({
        type: SEARCH_CRYPTO_DATA,
        payload: searchedCryptos
      })
   }


  return (
    <CryptoContext.Provider value={{ cryptoList: state.cryptoList,
    cryptoData: state.cryptoData,
    cryptoHistory: state.cryptoHistory,
    getCryptoList,
    getCryptoData,
    getCryptoHistory,
    sortCryptoData,
    searchCrypto
    }}>
      {props.children}
    </CryptoContext.Provider>
  )
}

export default CryptoState