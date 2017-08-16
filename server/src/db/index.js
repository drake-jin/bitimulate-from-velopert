require('dotenv').config()

const {
  MONGODB_URI : mongodbURI
} = process.env

const mongoose = require('mongoose')

module.exports = (function(){
  mongoose.Promise = global.Promise;  
  return {
    connect(){
      mongoose.createConnection(mongodbURI,{useMongoClient:true}).then(
        ()=>{
          console.log('MongoDB Connection is Successed')
        }
      ).catch((e)=>{
        console.log(e);
      })
    }

  }

})();