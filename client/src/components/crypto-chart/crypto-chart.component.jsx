import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoGraph from '../crypto-graph/crypto-graph.component.jsx'

const apiUrl = 'https://api.coingecko.com/api/v3/coins'

const CryptoChart = ({ name }) => {
  const [cryptoData, setCryptoData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${apiUrl}/${name}/market_chart`, {
      params: {
        vs_currency: "usd",
        days: "1"
      }
    })
    setCryptoData(data.data.prices)
  }
  fetchData();
  }, [name])

  if (!cryptoData) {
    return <p>loading...</p>
  } else {
    return (
      <div>
        <CryptoGraph history={cryptoData}/>
      </div>
    )
  }
}

export default CryptoChart