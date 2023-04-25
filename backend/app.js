let express = require('express');
let cookieParser = require('cookie-parser');
let cors = require('cors')
let connectToDB = require('./db/connect')
require('dotenv').config()
let { projectsRouter, documentsRouter, photosRouter } = require('./routes')

connectToDB()

let corsUrl = process.env.CORS_URL

let app = express();
app.use(cors({origin: corsUrl }))
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/projects', projectsRouter);
app.use('/api/documents', documentsRouter);
app.use('/api/photos', photosRouter);

module.exports = app;
