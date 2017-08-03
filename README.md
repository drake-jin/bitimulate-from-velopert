# drake-jin/koa.js
velopert의 develoxy 프로젝트를 따라해보자.!!! backend 부분만!!  
#12 부터 시청하면 됩니당.



## Infomation

1. 트렐로 주소
  - https://trello.com/c/ECR54lkp/141-bac...

2. 깃헙 주소
  - https://github.com/velopert/develoxy.git

## Installation List

1. Install environment Set Up

``` sh
$ nvm install v7.6.0
$ git clone ${this_repo}
$ cd ${this_repo}
$ npm install && npm start
```

2. npm install -g sequelize-cli
3. npm install -g eslint

## 작업 내용 .

  1. sequelize init

```
$ cd {repo}/app
$ sequelize init   # requirement that cli program     
```

## 참고문헌

1. ES7 문법 조금이라도 공부해보자
>   1. async, await   
>        - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await
>        - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/async_function
>   2. function*  
>        - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/function*
>   3. yield
>          - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield
>   4. yield*
>          - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/yield*
>   5. Promise        |
>   6. FED  함수형 프로그래밍

2. AWS DB 생성.
>   1. Subnet, VPS 사용자라면 Inbound 규칙에 접속 사용자의 규칙을 설정해야한다.
>   2. DB 는 Mysql 을 사용하였고  moducampus 의 데이터베이스를 덤프떠서 개발로 사용.

3. koa.js 관련 reference
>   1. http://koajs.com/#introduction
>   2. https://github.com/alexmingoia/koa-router/tree/master/
>   3. https://github.com/koajs/examples

4. Sequelize 공홈

> 1. 간단 예제
  http://docs.sequelizejs.com/manual/installation/getting-started
> 2. 접속 밑 잘 굴러가나 사용
  http://docs.sequelizejs.com/

3.
