const http = require('http')
const https = require('https')
const KeyGrip = require("keygrip")
const Koa = require('koa')

const app = new Koa()
app.keys = ['im a newer secret', 'i like turtle']
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256')
http.createServer(app.callback()).listen(3001)
https.createServer(app.callback()).listen(3002)
//This means you can spin up the same application as both HTTP and HTTPS or on multiple addresses:



// 1.  x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
  ctx.cookies.set('name', 'tobi', { signed: true });
  console.log(1)
})



//2.  logger
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
  console.log(2)
})


//3.  response
app.use(async ctx => {
  ctx.body = 'Hello World'
  console.log(3)
  ctx.throw(400);
  ctx.throw(400, 'name required');
  ctx.throw(400, 'name required', { user: 'user User' });

})


app.on('error', (err, ctx) => {
  ctx.

});


// 1,2,3 순서로 작성하면 3,2,1 역순으로 실행된다
// 1,2,3, 순서로 작성된것을 역순으로 재 배치하여 코드를 작성하면 3번 코드 말고 2,1 는 작동하지 않게 된다.
app.listen(3000)
