# use 


### set environment 
``` bash
$ nvm install 8.3.0
$ npm install -g yarn
$ yarn init
$ yarn global add eslint
    # npm install -g eslint
$ eslint -init
    #   - use poppular style
    #   - Airbnb
    #   - React NO
    #   - Javascript    
$ yarn add --dev eslint     // eslint는 로컬에도 설치가 되어있으면 좋다.
$ yarn add --dev nodemon
$ yarn add dotenv  
    # 이 폴더 들어가면 자동으로 환경변수를 저장할 수 있다. 나는 pyenv 도 같이 쓰고 있어서 
    # 특정 디렉ㄷ토리를 들어갈때 .env 에 작성된 내용의 스크립트 마저도 실행할 수 있다.
$ yarn add koa 
$ yarn add mongoose
$ yarn add koa-router  
```
### 준비


## notice
$npm install 과  $yarn install 의 차이는. 그 당시 설치했던 node 패키지를 다운받도록 도와준다. yarn.lock이 그런 기능을 함.
package-lock.json / yarn-lock 이 둘의 기능은 그 당시 설치했던 노드 패키지를 다운받도록 도와줌.


## reference
    1. REST ful API versioning design 
        - 버저닝을 하는 이유는 url이 같으면 같은 주소로의 요청이 캐싱되어버려서 업데이트를 해도 변하지 않을 수 있다.
        - https://stackoverflow.com/questions/389169/best-practices-for-api-versioning#

