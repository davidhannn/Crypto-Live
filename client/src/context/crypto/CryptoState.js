import React, { useEffect, useContext, useReducer } from 'react';
import axios from 'axios';

import { db } from '../../firebase/firebase.js';

import CryptoContext from './CryptoContext.js'
import CryptoReducer from './CryptoReducer.js'

import {
  GET_CRYPTO_LIST,
  GET_CRYPTO_DATA,
  GET_CRYPTO_HISTORY,
  SORT_CRYPTO_DATA,
  SEARCH_CRYPTO_DATA,
  GET_CRYPTO_FAVORITES
} from '../types.js'

const apiURL = 'https://api.coingecko.com/api/v3/coins/'
// const serverURL = 'http://localhost:4000'

const CryptoState = (props) => {
  const initialState = {
    cryptoList: [],
    cryptoData: {},
    cryptoHistory: [],
    cryptoSearchList: [],
    cryptoFavorites: []
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

    const getCryptoFavorites = (userId) => {
      // console.log(list, 'list')
      const favoritesRef = db.collection('favorites').doc(userId);

      favoritesRef.get().then((doc) => {
        if (doc.exists) {
          const list = Object.keys(doc.data()).filter(key => doc.data()[key] === true)
          // const favorites = state.cryptoList.filter((crypto) => list.indexOf(crypto.id) !== -1);
          // console.log(favorites)
          console.log(list)
          dispatch({
            type: GET_CRYPTO_FAVORITES,
            payload: list
          })
        }
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

   const searchCrypto = (word) => {
    axios.get(`${apiURL}/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false`)
    .then((result) => {
      dispatch({
        type: SEARCH_CRYPTO_DATA,
        payload: result.data
      })
    })
  }

  return (
    <CryptoContext.Provider value={{ cryptoList: state.cryptoList,
    cryptoData: state.cryptoData,
    cryptoHistory: state.cryptoHistory,
    cryptoSearchList: state.cryptoSearchList,
    cryptoFavorites: state.cryptoFavorites,
    getCryptoList,
    getCryptoData,
    getCryptoHistory,
    getCryptoFavorites,
    sortCryptoData,
    searchCrypto,
    }}>
      {props.children}
    </CryptoContext.Provider>
  )
}

export default CryptoState