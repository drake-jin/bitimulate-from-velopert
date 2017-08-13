const Router = require('koa-router')
const exchange = new Router()

exchange.get('/',(ctx) =>{
    ctx.body ='api/v1.0/exchange/index.js'
})

module.exports = exchange