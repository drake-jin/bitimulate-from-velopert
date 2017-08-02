var fs        = require('fs')
var path      = require('path')
var Sequelize = require('sequelize')
var env       = process.env.NODE_ENV || 'development'
const config    = require('../config/config.json')[env]
var db        = {}
var sequelize_temp = ""


if (config.use_env_variable) {
  sequelize_temp = new Sequelize(process.env[config.use_env_variable])
} else {
  sequelize_temp = new Sequelize(config.database, config.username, config.password, config)
}
const sequelize = sequelize_temp

// 현재 디렉토리의 모델 파일들을 불러옵니다.
fs
  .readdirSync(__dirname)
  .filter(
    file=> (file.indexOf('.') !== 0)  && (file  !== 'index.js')
  )
  .forEach((file)=> {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach( modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

sequelize
  .sync({force:false})
  .then(() =>{console.log("Table is synchronized")})
  .catch(err=>{console.log("Ann error has occurred", err)})


db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db


/*


var fs        = require('fs')
var path      = require('path')
var Sequelize = require('sequelize')
var env       = process.env.NODE_ENV || 'development'
var config    = require(__dirname + '/../config/config.json')[env]
var db        = {}
var sequelize_temp = ""
if (config.use_env_variable) {
  sequelize_temp = new Sequelize(process.env[config.use_env_variable])
} else {
  sequelize_temp = new Sequelize(config.database, config.username, config.password, config)
}
const sequelize = sequelize_temp

// 현재 디렉토리의 모델 파일들을 불러옵니다.
fs
  .readdirSync(__dirname)
  .filter(
    file=> (file.indexOf('.') !== 0)  && (file  !== 'index.js')
  )
  .forEach((file)=> {
    var model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach( modelName => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db





*/
