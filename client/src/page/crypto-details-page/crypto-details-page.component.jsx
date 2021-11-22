import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ws_link = new WebSocket('wss://ws-sandbox.coinapi.io/v1/');
const apiKey = process.env.REACT_APP_API_KEY

const url ='https://rest-sandbox.coinapi.io/'

const CryptoDetailsPage = () => {
  const { name } = useParams();
  const [graph, setGraph] = useState([]);

  // useEffect(() => {
  //   console.log(name)
  //   ws_link.onopen = () => {
  //     console.log('websocket connected')
  //     ws_link.send(JSON.stringify({
  //             "type": "hello",
  //             "apikey": apiKey,
  //             "heartbeat": false,
  //             "subscribe_data_type": ["trade"],
  //             "subscribe_filter_symbol_id": [
  //               "BITSTAMP_SPOT_BTC_USD$",
  //               "BITFINEX_SPOT_BTC_LTC$",
  //               "COINBASE_",
  //               "ITBIT_"
  //               ]
  //           }))

  //   ws_link.onmessage = (message) => {
  //     setGraph((currentGraph) => [...currentGraph, message])

  //   }
  // }
  // }, [])



  return (
    <h1>CryptoDetailsPage</h1>
  )
}

export default CryptoDetailsPage