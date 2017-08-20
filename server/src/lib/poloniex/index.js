// 참조. https://github.com/dutu/poloniex-api-node/blob/master/lib/poloniex.js
// 모듈을 만드는 방법을 참고 하기 위함.
const currencyPairMap = require('./currencyPairMap')
const axios = require('axios')

module.exports = (() => {
  function getCurrencyPairMap(id) {
    return currencyPairMap[id.toString()]
  }
  function getTickers() {
    return axios.get('https://poloniex.com/public?command=returnTicker').then((response) => { return response.data })
  }
  function convertToTickerObject(data) {
    const keys = [
      'id',
      'last',
      'lowestAsk',
      'highestBid',
      'percentChange',
      'baseVolume',
      'quoteVolume',
      'isFrozen',
      'high24hr',
      'low24hr',
    ]
    const obj = {}

    data.forEach((value, i) => {
      if (i === 0) {
        obj.name = getCurrencyPairMap(value)
        return
      }
      const key = keys[i]
      obj[key] = value
    })

    return obj
  }
  /**
   * Retrives pair id using its name
   * 
   * @param {string} id 
   */
  return {
    getCurrencyPairMap,
    getTickers,
    convertToTickerObject,
  }
})()
