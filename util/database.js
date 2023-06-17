const mongoose = require('mongoose')
// const dbpath = 'mongodb+srv://Ahilash:Nandhanam433!@cluster0.zwnamjy.mongodb.net/test'
const dbpath =  "mongodb://127.0.0.1:27017/shopping_management"
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
module.exports = mongoose
  .connect(dbpath, connectionParams)
  .then()
  .catch((err) => console.log(err))
