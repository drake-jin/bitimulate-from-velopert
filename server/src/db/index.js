require('dotenv').config()

const {
  MONGODB_URI : mongodbURI
} = process.env

const mongoose = require('mongoose')

module.exports = (function(){
  mongoose.Promise = global.Promise;  
  return {
    connect(){
      mongoose.connect(mongodbURI).then(
        ()=>{
          console.log('MongoDB Connection is Successed')
        }
      ).catch((e)=>{
        console.log(e);
      })
    }

  }

})();

/*

// with mongodb:// URI
db = mongoose.createConnection('mongodb://user:pass@localhost:port/database');

// and options
var opts = { db: { native_parser: true }}
db = mongoose.createConnection('mongodb://user:pass@localhost:port/database', opts);

// replica sets
db = mongoose.createConnection('mongodb://user:pass@localhost:port,anotherhost:port,yetanother:port/database');

// and options
var opts = { replset: { strategy: 'ping', rs_name: 'testSet' }}
db = mongoose.createConnection('mongodb://user:pass@localhost:port,anotherhost:port,yetanother:port/database', opts);

// with [host, database_name[, port] signature
db = mongoose.createConnection('localhost', 'database', port)

// and options
var opts = { server: { auto_reconnect: false }, user: 'username', pass: 'mypassword' }
db = mongoose.createConnection('localhost', 'database', port, opts)

// initialize now, connect later
db = mongoose.createConnection();
db.open('localhost', 'database', port, [opts]);

*/