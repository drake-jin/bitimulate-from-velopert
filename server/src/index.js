// set environmemnt use dotenv
require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')


const app = new Koa()
const {
  PORT: port,
} = process.env

/*
이게 있으면 전체 라우터의 메시지가 hello world 로 날라감. 주의할것. 
app.use((ctx, next) => {
    ctx.body = 'hello world'
})
*/


const router = new Router()

const api = new require('./api')
router.use('/api', api.routes());


app.use(router.routes());
app.use(router.allowedMethods());



app.listen(port, () => {
  console.log(`this is koa server that's port is ${port}`)
})
