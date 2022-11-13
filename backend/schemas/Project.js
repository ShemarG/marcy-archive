let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ProjectSchema = new Schema({
  name: String,
  cohort: String,
  screenshot: Buffer,
  authors: Array
})

module.exports = mongoose.model('Project', ProjectSchema)