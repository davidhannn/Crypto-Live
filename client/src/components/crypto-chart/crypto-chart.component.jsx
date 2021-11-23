import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CryptoGraph from '../crypto-graph/crypto-graph.component.jsx'

const apiUrl = 'https://api.coingecko.com/api/v3/coins'

const CryptoChart = ({ name }) => {
  const [cryptoData, setCryptoData] = useState(null)

  const formatData = data => {
    return data.map(el => {
      return {
        time: el[0],
        price: el[1].toFixed(2)
      }
    })
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`${apiUrl}/bitcoin/market_chart`, {
      params: {
        vs_currency: "usd",
        days: "1"
      }
    })
    console.log(data)
    setCryptoData({
      day: formatData(data.data.prices)
    })
  }
  fetchData();
  }, [])

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