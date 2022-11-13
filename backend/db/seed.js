// This file serves as a quick way to seed the db and its collections should it be dropped.
// This script is run from mongosh using the load() method:
// load("path/to/seed.js")

// On Windows double slashes are needed to run this file from mongosh:
// load("C:\\absolute\\path\\to\\seed.js")

let db = connect('mongodb://localhost')
db = db.getSiblingDB('marcy_archive')
db.createCollection('projects');
db.createCollection('documents');
db.createCollection('photos');


