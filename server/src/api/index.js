const Router = require('koa-router')
const v_1_0 = require('./v1.0') 
const api = new Router()

api.use('/v1.0',v_1_0.routes())

module.exports = api