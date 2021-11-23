import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CryptoGraph from '../crypto-graph/crypto-graph.component.jsx'
import CryptoContext from '../../context/crypto/CryptoContext';

const apiUrl = 'https://api.coingecko.com/api/v3/coins'

const CryptoChart = ({ name }) => {
  const { getCryptoHistory, cryptoHistory } = useContext(CryptoContext)

  useEffect(() => {
    getCryptoHistory(name, 1)
  }, [name])

  if (!cryptoHistory) {
    return <p>loading...</p>
  } else {
    return (
      <div>
        <CryptoGraph history={cryptoHistory} name={name}/>
      </div>
    )
  }
}

export default CryptoChart