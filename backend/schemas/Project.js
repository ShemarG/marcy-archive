let mongoose = require('mongoose')
let Schema = mongoose.Schema
let { Buffer } = require('node:buffer')

let ProjectSchema = new Schema({
  name: String,
  cohort: {location: String, start: String, year: Number},
  screenshot: Buffer,
  authors: Array,
  github_repo_link: String,
  github_pages_link: String,
  assignment: String
})

ProjectSchema.pre(['save', 'findOneAndUpdate'], function (){ 
  if (this.authors && this.authors.length) this.authors.sort()
  if (this.screenshot) this.screenshot = Buffer.from(this.screenshot)

})

module.exports = mongoose.model('Project', ProjectSchema)