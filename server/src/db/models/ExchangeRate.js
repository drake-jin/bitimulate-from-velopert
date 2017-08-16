// currency rate for crypto currency exchange

const mongoose = require('mongoose')
const {Schema} = mongoose
/*
reference : lib > ploniex > currencyPairMap.js
{
    "BTC_BCN": {
        "id": 7,
        "last": "0.00000037",
        "lowestAsk": "0.00000038",
        "highestBid": "0.00000037",
        "percentChange": "0.32142857",
        "baseVolume": "324.01623470",
        "quoteVolume": "979915839.53082001",
        "isFrozen": "0",
        "high24hr": "0.00000040",
        "low24hr": "0.00000028"
    },
    ..... 생략 .....
}
*/
const ExchangeRate = new Schema({
  name: String, 
  last: Number,
  last: Number,
  lowestAsk: Number,
  highestBid: Number,
  percentChange: Number,
  baseVolume: Number,
  quoteVolume: Number,
  isFrozen: Number,
  high24hr: Number,
  low24hr: Number
})

module.exports = mongoose.model('ExchangeRate',ExchangeRate)