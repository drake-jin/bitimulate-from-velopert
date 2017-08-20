// set environmemnt use dotenv
require('dotenv').config()

const {
  PORT: port,
  MONGODB_URI: mongodbURI,
} = process.env

const Koa = require('koa')
const Router = require('koa-router')

const db = require('./db')
const api = require('./api')

db.connect()
const app = new Koa()

/*
이게 있으면 전체 라우터의 메시지가 hello world 로 날라감. 주의할것. 
app.use((ctx, next) => {
    ctx.body = 'hello world'
})
*/

const router = new Router()
router.use('/api', api.routes())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(port, () => {
  console.log(`this is koa server that's port is ${port}`)
})
