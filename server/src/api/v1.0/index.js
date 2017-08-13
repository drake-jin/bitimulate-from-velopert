const Router = require('koa-router')
const v_1_0 = new Router()

const auth = require('./auth') 
const exchange = require('./exchange') 


v_1_0.use('/auth',auth.routes())
v_1_0.use('/exchange',exchange.routes())

module.exports = v_1_0