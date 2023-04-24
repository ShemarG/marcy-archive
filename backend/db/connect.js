let mongoose = require('mongoose');

// Handy function the initializes the default mongoose connection.
async function connectToDatabase() {
  try {
    let connection = await mongoose.connect('mongodb+srv://devonte202:597427gianni@marcy-archive-cluster.ltsphhl.mongodb.net/marcy-archive')
    console.info('Connected to database successfully.')
    return connection
  } catch (e) {
    console.error(e)
  }
}

module.exports = connectToDatabase