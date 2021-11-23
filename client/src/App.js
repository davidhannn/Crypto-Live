import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import './App.css';
import Axios from 'axios';
import CryptoState from './context/crypto/CryptoState'
// import API_KEY from '../../config.js'
import CryptoList from './components/crypto-list/crypto-list.component.jsx'
import CryptoDetailsPage from './page/crypto-details-page/crypto-details-page.component.jsx'

import { w3cwebsocket as WebSocket } from 'websocket';

// const ws_link = new WebSocket('wss://ws-sandbox.coinapi.io/v1/');
const apiKey = process.env.REACT_APP_API_KEY

// const url ='https://rest-sandbox.coinapi.io/'

const App = () => {

  // useEffect(() => {

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
  //     console.log(message)
  //   }

  // }})

  return (
    <div className="App">
      <CryptoState>
        <Router>
          <Routes>
            <Route path="/" element={<CryptoList />} />
            <Route path="/:name" element={<CryptoDetailsPage />} />
          </Routes>
        </Router>
      </CryptoState>
    </div>
  );
}

export default App;
