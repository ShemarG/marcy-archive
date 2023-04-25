require('dotenv').config()
let mongoose = require('mongoose');

let connectionString = MONGODB_CONNECTION_STRING

// Handy function that initializes the default mongoose connection.
async function connectToDatabase() {
  try {
    let connection = await mongoose.connect(connectionString)
    console.info('Connected to database successfully.')
    return connection
  } catch (e) {
    console.error(e)
  }
}

module.exports = connectToDatabase