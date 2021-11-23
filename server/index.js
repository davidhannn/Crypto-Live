const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth.js')

const PORT = 4000;

app.use(cors());
app.use(express.json())

app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`app listening on PORT ${PORT}`)
})





// const webSocket = require('ws');
// const APIKEY = require('../config.js');
// const apiUrl = 'https://rest-sandbox.coinapi.io/v1/assets/'

// const options = {
  //   headers: {
  //     'X-CoinAPI-Key': process.env.API_KEY,
  //     'Accept-Encoding': 'deflate, gzip'
  //   }
  // }
// app.get('/cryptos', (req, res) => {
//   axios.get(`${apiUrl}`, options)
//     .then((result) => {
//       res.send(result.data)
//     })
//   // res.send('testing')
// })

// app.get('/cryptos/:name', (req, res) => {
//   axios.get(`${apiUrl}`, options)
//     .then((result) => {
//       res.send(result.data)
//     })
//   // res.send('testing')
// })

// app.get('/cryptos', (req, res) => {
//   const wss = new webSocket('wss://ws-sandbox.coinapi.io/v1/');

//   wss.on('open', function open() {
//     wss.send(JSON.stringify({
//       "type": "hello",
//       "apikey": APIKEY,
//       "heartbeat": false,
//       "subscribe_data_type": ["trade"],
//       "subscribe_filter_symbol_id": [
//         "BITSTAMP_SPOT_BTC_USD$",
//         "BITFINEX_SPOT_BTC_LTC$",
//         "COINBASE_",
//         "ITBIT_"
//         ]
//     }));
//   });

//   wss.on('message', function incoming(message) {
//     console.log('received: %s', message);
//   });
// })


