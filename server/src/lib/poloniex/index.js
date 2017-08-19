// 참조. https://github.com/dutu/poloniex-api-node/blob/master/lib/poloniex.js
// 모듈을 만드는 방법을 참고 하기 위함.
const currencyPairMap = require('./currencyPairMap')
const axios = require('axios')

module.exports = (() => {
  return {
    /**
     * Retrives pair id using its name
     * 
     * @param {string} id 
     */
    getCurrencyPairMap(id) {
      return currencyPairMap[id.toString()]
    },
    getTickers() {
      return axios.get('https://poloniex.com/public?command=returnTicker').then((response) => { return response.data })
    },
  }
})()
