let mongoose = require('mongoose')
let Schema = mongoose.Schema

let PhotoSchema = new Schema({
  caption: String,
  date: Date,
  photo: Buffer,
  location: String
})

module.exports = mongoose.model('Photo', PhotoSchema)