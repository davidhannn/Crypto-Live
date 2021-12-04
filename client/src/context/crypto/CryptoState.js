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
  GET_CRYPTO_FAVORITES,
  SET_CRYPTO_ALERTS
} from '../types.js'

const apiURL = 'https://api.coingecko.com/api/v3/coins/'
// const serverURL = 'http://localhost:4000'

const CryptoState = (props) => {
  const initialState = {
    cryptoList: [],
    cryptoData: {},
    cryptoHistory: [],
    cryptoSearchList: [],
    cryptoFavorites: [],
    cryptoAlerts: []
  }

  const [state, dispatch] = useReducer(CryptoReducer, initialState)

  useEffect(() => {
    getCryptoList(1)
    getCryptoFavorites()
  }, [])

  const getCryptoList = (pageNumber) => {
    axios.get(`${apiURL}/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${pageNumber}&sparkline=false'`)
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
      const favoritesRef = db.collection('favorites').doc(userId);

      favoritesRef.get().then((doc) => {
        if (doc.exists) {
          const list = Object.keys(doc.data()).filter(key => doc.data()[key] === true)
          dispatch({
            type: GET_CRYPTO_FAVORITES,
            payload: list
          })
        }
      })

    }

   const getCryptoAlertPrices = (userId) => {
    const alertsRef = db.collection('alerts').doc(userId);

    alertsRef.onSnapshot(async (doc) => {
      if (doc.exists) {
        const arrayOfObj = Object.entries(doc.data()).map((item) => {
            return {
              coin: item[0],
              price: Number(item[1].price)
            }
        })

      let coinPriceUrl = 'https://api.coingecko.com/api/v3/simple/price?ids='

      arrayOfObj.forEach((id, i) => {
        if (i === 0) {
          coinPriceUrl = coinPriceUrl.concat(id.coin)
        } else {
          coinPriceUrl = coinPriceUrl.concat(`%2C${id.coin}`)
        }
      })
      const data = await axios.get(`${coinPriceUrl}&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=false&include_last_updated_at=false`)

      const dataArray = Object.entries(data.data).map((coin) => {
        return {
          coin: coin[0],
          price: coin[1].usd
        }
      })

      const priceAlert = []
      for (var i = 0; i < arrayOfObj.length; i++) {
        for (var j = 0; j < dataArray.length; j++) {
          if (arrayOfObj[i].coin == dataArray[j].coin) {
            if(Number(arrayOfObj[i].price) >= Number(dataArray[j].price)) {
              priceAlert.push({ coin: arrayOfObj[i].coin,
              price: arrayOfObj[i].price,
              status: 'higher'
              })
            } else {
              priceAlert.push({ coin: arrayOfObj[i].coin,
                price: arrayOfObj[i].price,
                status: 'lower'
            })
          }
        }
      }
      }

      dispatch({
        type: SET_CRYPTO_ALERTS,
        payload: priceAlert
      })
      }
    })
   }

   const sortCryptoData = (val) => {
     dispatch({
       type: SORT_CRYPTO_DATA
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
    cryptoAlerts: state.cryptoAlerts,
    getCryptoList,
    getCryptoData,
    getCryptoHistory,
    getCryptoFavorites,
    sortCryptoData,
    searchCrypto,
    getCryptoAlertPrices
    }}>
      {props.children}
    </CryptoContext.Provider>
  )
}

export default CryptoState