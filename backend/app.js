let express = require('express');
let cookieParser = require('cookie-parser');
let cors = require('cors')
let connectToDB = require('./db/connect')
let { projectsRouter, documentsRouter, photosRouter } = require('./routes')

connectToDB()

let app = express();
app.use(cors({origin: 'http://localhost:5173' }))
let distPath = '../frontend/dist'

app.use(cors({origin: 'http://localhost:5173' }))
app.use(express.json({ limit: '16mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(distPath))

app.use('/api/projects', projectsRouter);
app.use('/api/documents', documentsRouter);
app.use('/api/photos', photosRouter);

// Makes sure we serve the Svelte app first and foremost so it renders with every get request.
// It is ultimately in charge of doing client-side routing and sending api requests to this server.
// app.get('*', (req, res) => {
//   res.sendFile('index.html', distPath)
// })

module.exports = app;
