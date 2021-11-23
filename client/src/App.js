import React, { useState, useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import CryptoState from './context/crypto/CryptoState'
import AuthState from './context/auth/AuthState'

import CryptoList from './components/crypto-list/crypto-list.component.jsx'
import CryptoDetailsPage from './page/crypto-details-page/crypto-details-page.component.jsx'
import RegisterPage from './page/register-page/register-page.component.jsx';
import LoginPage from './page/login-page/login-page.component.jsx';
import Navbar from './components/navbar/navbar.component.jsx';
import { w3cwebsocket as WebSocket } from 'websocket';

import './app.scss';

// import API_KEY from '../../config.js'
// const ws_link = new WebSocket('wss://ws-sandbox.coinapi.io/v1/');
// const apiKey = process.env.REACT_APP_API_KEY

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
    <div className="app">
      <div className="app-container">
        <AuthState>
          <CryptoState>
            <Router>
            <Navbar />
              <Routes>
                <Route path="/" element={<CryptoList />} />
                <Route path="/:name" element={<CryptoDetailsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </Router>
          </CryptoState>
        </AuthState>
      </div>
    </div>
  );
}

export default App;
