// currency rate for crypto currency exchange

const mongoose = require('mongoose')
require('mongoose-double')(mongoose);
const {Schema} = mongoose
const {Types} = Schema

/*
reference : lib > ploniex > currencyPairMap.js
{
    "BTC_BCN": {
//        "id": 7,
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
  last: Types.Double,
  lowestAsk: Types.Double,
  highestBid: Types.Double,
  percentChange: Types.Double,
  baseVolume: Types.Double,
  quoteVolume: Types.Double,
  isFrozen: Types.Double,
  high24hr: Types.Double,
  low24hr: Types.Double
})

module.exports = mongoose.model('ExchangeRate',ExchangeRate)