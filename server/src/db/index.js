require('dotenv').config()

const {
  MONGODB_URI : mongodbURI
} = process.env

const mongoose = require('mongoose')

module.exports = (function(){
  mongoose.Promise = global.Promise;  
  return {
    connect(){
      // createConnection 은 현재 deceprate 되어있긴 하지만 아직 몽고 "mongoose": "^4.11.6"에서는 약간 불안정한 형태를 나타냄. 아직 안정이 안된상태.
      mongoose.connect(mongodbURI, {useMongoClient:true}).
      then(
        ()=>{
          console.log('MongoDB Connection is Successed')
        }
      ).catch((e)=>{
        console.log(e);
      })
    }
  }
})()