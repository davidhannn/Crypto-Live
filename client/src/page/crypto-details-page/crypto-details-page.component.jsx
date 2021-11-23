import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import CryptoChart from '../../components/crypto-chart/crypto-chart.component.jsx'
const ws_link = new WebSocket('wss://ws-sandbox.coinapi.io/v1/');
const apiKey = process.env.REACT_APP_API_KEY

const url ='https://rest-sandbox.coinapi.io/'

const CryptoDetailsPage = () => {
  const { name } = useParams();
  const [graph, setGraph] = useState([]);

  // useEffect(() => {
  //   ws_link.onopen = () => {
  //     console.log('websocket connected')
  //     ws_link.send(JSON.stringify({
  //             "type": "hello",
  //             "apikey": apiKey,
  //             "heartbeat": false,
  //             "subscribe_data_type": ["trade"],
  //             "subscribe_filter_asset_id": [`${name}`],
  //             "subscribe_filter_symbol_id": [`${name}`]
  //           }))

  //   ws_link.onmessage = (message) => {
  //     // setGraph((currentGraph) => [...currentGraph, JSON.parse(message.data)])
  //     setGraph(JSON.parse(message.data))
  //   }
  // }

  // }, [])

  return (
    <div>
      <h1>{name}</h1>

      <p>{graph.price}</p>
      <CryptoChart name={name}/>
    </div>

  )
}

export default CryptoDetailsPage