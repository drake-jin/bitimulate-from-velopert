const poloniex = require('lib/poloniex')
const db = require('db')
const ExchangeRate = require('db/models/ExchangeRate')

require('dotenv').config()


db.connect()

// 왜  async를 달았을까?
// 엥 poloniex는 왜 await을 받았지? 
// 이런 생각은 어떻게해서 도출할 수 있는걸까?
async function registerInitialExchangeRate() {
  const tickers = await poloniex.getTickers()

  // remove temporary data that tickers infomation(ExchangeRate mongoose collection)
  await ExchangeRate.drop()
  console.log('drop exchangeRate Drop Collection')

  const keys = Object.keys(tickers)
  const promises = keys.map(
    (key) => {
      const ticker = tickers[key]
      const data = Object.assign({ name: key }, ticker)

      // Crawler ExchangeRate Initializing that insert new data
      const exchangeRate = new ExchangeRate(data) // 초기 운영데이터를 구하기 위해
      return exchangeRate.save()
      // return data     // 초기 운영데이터를 구했으면 이 줄의 주석을 해제한다.
    },
  )
  await promises // 이 소스코드가 됨.
  // await Promise.all(promises) // 이 소스코드는 안됨
  console.log('Crawler ExchangeRate Initializing is Succeed')
}

registerInitialExchangeRate()
