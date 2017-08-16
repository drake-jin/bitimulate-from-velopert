require('dotenv').config()

const poloniex = require('lib/poloniex')
const db = require('db');

db.connect()
poloniex.getTickers().then(data=>{
//  console.log(data);
})
