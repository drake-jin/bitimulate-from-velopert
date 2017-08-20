const WebSocket = require('ws')

module.exports = (() => {
  let client
  let _messageHandler = () => {
    console.warn('messageHandler is not defined')
  }

  const handlers = {
    open: () => {
      console.log('connect to server')
      // subscribe to tickers
      client.send(JSON.stringify({ command: 'subscribe', channel: '1002' }))
    },
    message: (message) => {
      // console.log('recieve : %s', message)
      _messageHandler(message)
    },
  }


  const connect = () => {
    client = new WebSocket('wss://api2.poloniex.com')
    client.on('open', handlers.open)
    client.on('message', handlers.message)
    client.on('close', reconnect)
  }

  const reconnect = () => {
    console.log('reconnecting ...')
    setTimeout(connect, 1000)
  }

  return {
    set handleMassage(messageHandler) {
      _messageHandler = messageHandler
    },
    connect,
    get getClient() {
      return client
    },
  }
})()

/*
const WebSocketClient = require('websocket').client  // websocket 말고 ws를 써보자.

const client = new WebSocketClient()


function connect() {
  client.connect('wss://api2.poloniex.com', 'echo-protocol') // 이 정보는 어떻게 알았지?
// TODO: 27:47 EP4 
}

client.on('connectFailed', (err) => {
  console.log('Failed to connnect to Server')
  console.log(err.toString())
})

client.on('connect', (connection) => {
  connection.on('error', (err) => {
    console.log('Server has errors')
    console.log(err.toString())
    // TODO: reconnect to server
  })

  connection.on('close', (err) => {
    console.log('Server is closed')
    console.log(err.toString())
    // TODO: reconnect to server
  })
  connection.on('message', (message) => {
    console.log(message)
    // TODO: Describe any works
  })
})

connect()
*/
