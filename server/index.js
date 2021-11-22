const express = require('express');
const webSocket = require('ws');
const app = express();
require('dotenv').config();
const APIKEY = require('../config.js');

const PORT = 4000;

const wss = new webSocket('wss://ws-sandbox.coinapi.io/v1/');

wss.on('open', function open() {
  wss.send(JSON.stringify({
    "type": "hello",
    "apikey": APIKEY,
    "heartbeat": false,
    "subscribe_data_type": ["trade"],
    "subscribe_filter_symbol_id": [
      "BITSTAMP_SPOT_BTC_USD$",
      "BITFINEX_SPOT_BTC_LTC$",
      "COINBASE_",
      "ITBIT_"
      ]
  }));
});

wss.on('message', function incoming(message) {
  console.log('received: %s', message);
});


app.listen(PORT, () => {
  console.log(`app listening on PORT ${PORT}`)
})