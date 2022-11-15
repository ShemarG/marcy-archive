let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ProjectSchema = new Schema({
  name: String,
  cohort: {location: String, start: String},
  screenshot: Buffer,
  authors: Array,
  github_repo_link: String,
  github_pages_link: String,
  assignment: String
})

ProjectSchema.pre(['save', 'findOneAndUpdate'], function (){ 
  if (this.authors && this.authors.length) this.authors.sort()
})

module.exports = mongoose.model('Project', ProjectSchema)