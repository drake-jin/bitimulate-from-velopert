var autobahn = require('autobahn');
var wsuri = "wss://api.poloniex.com";
var connection = new autobahn.Connection({
  url: wsuri,
  realm: "realm1"
});

connection.onopen = function (session) {
    // args is variables , kargs is the others variables
    // 파이썬에서 종종 사용되는 문법으로 
    // args: array variables set
    // kwargs : dictionary(Object) variable set 을 의미한다.
	function marketEvent (args,kwargs) {
		console.log(args);
	}
	function tickerEvent (args,kwargs) {
		console.log(args);
	}
	function trollboxEvent (args,kwargs) {
		console.log(args);
	}
	session.subscribe('BTC_XMR', marketEvent);
	session.subscribe('ticker', tickerEvent);
	session.subscribe('trollbox', trollboxEvent);
}

connection.onclose = function () {
  console.log("Websocket connection closed");
}
		       
connection.open();

/*
소감 : 나는 잘 됬는데 민준님이 했을대에는 커넥션이 되다 말다 반복했음.


Velopert 의 예제소스 후기

크롤러관련해서 작업하는데, 생각처럼 쉽게쉽게 되지 않는다.
폴로닉스 API 문서는 은근히.. 잘 안되어있다.

WebSocket 연결은.. 아직도 잘 모르겠다.
api2.poloniex.com 이거는 websocket 디버거로 들어갔을때는 굉장히 잘 된다.
근데 그러기위해서는, autobahn 프로토콜을 좀 알아봐야할것같고

막상 autobahn 으로는, 연결이 잘 안된다 -_-
그렇다고 아예 안되는건 아니다.

그냥 안되다가
어쩌다가 연결이되면 그땐 또 제대로 작동한다.
뭔가.. 이걸로 서버를 만들기엔 무리가 있을듯싶다.

방금 또 테스팅을 해보니 10번정도 시도하고 연결이 됐다.. 이건 좀 별로다.
내가 예상하기로는, 서버측에서 연결할수있는 클라이언트수를 제한시켜놓고 줄을 서는것같다.

이런식이라면,, 개발하기 힘들다.
차라리 REST API 기반으로 사용을 하는게 나을것같다.
생각을 좀 더 해봐야할듯.




*/