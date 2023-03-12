let mongoose = require('mongoose')
let { Schema } = mongoose;

// Discriminators offer a way for documents to have variations but still be considered
// the same type. Here, FileDocument and LinkDocument are still instances of Document.
let options = { discriminatorKey: 'document_type' }

let DocumentSchema = new Schema({
  title: String,
  cohort: {location: String, start: String, year: Number},
  authors: Array,
  document_type: { type: String, required: true }
}, options)

DocumentSchema.pre(['save', 'findOneAndUpdate'], function (){ 
  if (this.authors && this.authors.length) this.authors.sort()
})

const Document = mongoose.model('Document', DocumentSchema)

const FileDocument = Document.discriminator('file',
  new Schema({ file: { type: Buffer, required: true } }, options)
)
const LinkDocument = Document.discriminator('link',
  new Schema({ link: { type: String, required: true } }, options)
)


module.exports = Document