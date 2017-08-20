// currency rate for crypto currency exchange

const mongoose = require('mongoose')
require('mongoose-double')(mongoose)

const { Schema } = mongoose
const { Types } = Schema

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
  low24hr: Types.Double,
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
})

// const model = mongoose.model('ExchangeRate', ExchangeRate) // 이건 안돼! 왜일까?

// only for temporary use
ExchangeRate.index({ name: 1 }, { name: 'rateTypeIdentifier' }, { unique: true })

ExchangeRate.statics.drop = () => {
  return model.remove({}).exec()
}

// 화살표 함수에는 this 가 안들어감
ExchangeRate.statics.updateTicker = (name, data) => {
  return model.findOneAndUpdate(
    { name },
    { data, lastUpdated: new Date() },
    { upsert: false, new: true }).exec()
}
const model = mongoose.model('ExchangeRate', ExchangeRate) // 되는데..?


module.exports = model
