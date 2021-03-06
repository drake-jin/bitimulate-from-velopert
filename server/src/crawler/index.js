const poloniex = require('lib/poloniex')
const { parseJSON, polyfill } = require('lib/common')
const socket = require('./socket')
const db = require('db')
const ExchangeRate = require('db/models/ExchangeRate')

require('dotenv').config()


db.connect()


socket.connect()

const messageHandler = {
  1002: async (data) => { // 어떻게 async를 달아줄 생각을 했을까?
    if (!data) return
    const converted = poloniex.convertToTickerObject(data)
    const { name } = converted
    const rest = polyfill.objectWithoutProperties(converted, 'name')

    try {
      // const updated = await ExchangeRate.updateTicker(name, rest)
      await ExchangeRate.updateTicker(name, rest)
      console.log(`[Updated],${new Date()} :  ${name}`)
    } catch (e) {
      console.log(e.toString())
    }
  },
}

socket.handleRefresh = () => {
  updateEntireRate()
}

socket.handleMassage = (message) => {
  const parsed = parseJSON(message)
  if (!parsed) {
    return null
  }
  const [type, meta, data] = parsed
  if (messageHandler[type]) {
    messageHandler[type](data)
  }
  return parsed
}


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
  try {
    await Promise.all(promises)
  } catch (e) {
    console.log(e)
  }
  // await promises // 이 소스코드가 됨.
  // await Promise.all(promises) // 이 소스코드는 안됨  이 두개는 무슨 차이 일까?

  console.log('Crawler ExchangeRate Initializing is Succeed')
}


async function updateEntireRate() {
  const tickers = poloniex.getTickers()
  const keys = Object.keys(tickers)
  console.log(keys)

  const promises = keys.map(
    (key) => {
      return ExchangeRate.updateTicker(key, tickers[key])
    },
  )

  try {
    Promise.all(promises)
  } catch (e) {
    console.log(e.toString())
    return
  }
  console.log('[Update is complete at Exchange Rate]')
}


// registerInitialExchangeRate()

updateEntireRate()
