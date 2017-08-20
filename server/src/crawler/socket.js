const WebSocket = require('ws')

module.exports = (() => {
  let client
  let _messageHandler = () => {
    console.warn('_messageHandler is not defined')
  }
  let _refreshHandler = () => {
    console.warn('_refreshHandler is not defined')
  }

  const handlers = {
    open: async () => {
      console.log('connect to server')
      await _refreshHandler()
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
    set handleRefresh(refreshHandler) {
      _refreshHandler = refreshHandler
    },
    connect,
    get getClient() {
      return client
    },
  }
})()
