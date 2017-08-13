# Crawler


## Env Set up 

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
$ yarn add autobahn
$ yarn add dotenv  
    # 이 폴더 들어가면 자동으로 환경변수를 저장할 수 있다. 나는 pyenv 도 같이 쓰고 있어서 
    # 특정 디렉ㄷ토리를 들어갈때 .env 에 작성된 내용의 스크립트 마저도 실행할 수 있다.
```

## References

1. api key 발급 
    - 비트코인 정보 저장소
    - https://poloniex.com/apiKeys  
        - 회원가입은 가짜 정보 입력해도 상관없다.
        - 이미지도 대충올려도 가입은된다.
    - 크롤러가 이 정보를 토대로 서비스데이터를 구성할 예정
    - API page : https://poloniex.com/support/api/
    - API Sample Page : https://pastebin.com/dMX7mZE0
    
2. Autobahn 에 대해서
    - Web Application Protocol V2 라는데 아마  Http/2 를 말하는것 같음. 이거 뭔가 WAMP로 불리우는거 같음.
    - websocket 이랑 Autobahn 의 차이는?

3. wss://api2.poloniex.com/ 의 채널 목록
    - 참조 : https://stackoverflow.com/questions/32154121/how-to-connect-to-poloniex-com-websocket-api-using-a-python-library
    - 폴로닉스의 API Channel 이다 
    - 1001 = trollbox (you will get nothing but a heartbeat)
    - 1002 = ticker
    - 1003 = base coin 24h volume stats
    - 1010 = heartbeat
    - 'MARKET_PAIR' = market order books
    - BTC_XMR = BTC Info

##  Plan
    1. (민준) 일단.. 사용자가 직접 Poloniex API 를, 클라이언트쪽에서 호출하는 방식으로 개발해야할듯. (혹은 api2 폴로닉스 서버에 websocket 으로 연결)
    // 1001 과 1002 채널에다가  web socket 을 이용해 직접 연결 할 예정




