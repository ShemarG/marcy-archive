let mongoose = require('mongoose')
let Schema = mongoose.Schema

let DocumentSchema = new Schema({
  title: String,
  cohort: {location: String, start: String, year: Number},
  authors: Array,
  document: Buffer,
  document_type: String,
  assignment: String
})

DocumentSchema.pre(['save', 'findOneAndUpdate'], function (){ 
  if (this.authors && this.authors.length) this.authors.sort()
})

module.exports = mongoose.model('Document', DocumentSchema)