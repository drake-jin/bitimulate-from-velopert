// node_modules

//    koa 관리 모듈
const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

//    DB Connection 관련
const Sequelize = require('sequelize')
const dbsource = require('../config/database.json')
const sequelize = new Sequelize(
  dbsource[process.env.NODE_ENV].database,
  dbsource[process.env.NODE_ENV].user,
  dbsource[process.env.NODE_ENV].password,
  dbsource[process.env.NODE_ENV].info
)

// define const variable
const app = new Koa()


// 라우터 셋업
const api = require('./api')



app.use(bodyParser())

const router = new Router()
router.use('/api', api.routes(),api.allowedMethods())
router.get('/db', async (ctx, next)=>{
  console.log()
  console.log('ddd')
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })
  ctx.body = "데이터베이스 연결에 성공하였습니다."
})
app.use(router.routes())
app.use(router.allowedMethods())






app.listen(3000)
