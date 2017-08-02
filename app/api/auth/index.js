const Router = require('koa-router')

const router = new Router()

router.get('/login/:provider', (ctx, next) =>{


  console.log(ctx.request.body);
  ctx.body={
    provider: ctx.params.provider
  }
})

module.exports = router
