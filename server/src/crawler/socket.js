const WebSocketClient = require('websocket').client

const client = new WebSocketClient()


function connect() {
//  client.connect('wss://api.poloniex.com', 'echo-protocol') // 이 정보는 어떻게 알았지?
// TODO: 27:47 EP4 
}

client.on('connectFailed', (err) => {
  console.log(err)
  console.log('Failed to connnect to Server')
})

client.on('connect', (connection) => {
  connection.on('error', (err) => {
    console.log('Server has errors')
    console.log(err)
    // TODO: reconnect to server
  })

  connection.on('close', (err) => {
    console.log('Server is closed')
    console.log(err)
    // TODO: reconnect to server
  })
  connection.on('message', (message) => {
    console.log(message)
    // TODO: Describe any works
  })
})

connect()

