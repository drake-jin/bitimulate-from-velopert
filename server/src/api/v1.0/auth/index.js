const Router = require('koa-router')
const auth = new Router()

auth.get('/',(ctx) =>{
    ctx.body ='api/v1.0/auth/index.js'
})

module.exports = auth