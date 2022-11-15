let express = require('express');
let cookieParser = require('cookie-parser');
let connectToDB = require('./db/connect')
let { projectsRouter, documentsRouter, photosRouter } = require('./routes')

connectToDB()

let app = express();
let distPath = '../frontend/dist'

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(distPath))

// Makes sure we serve the Svelte app first and foremost so it renders with every get request.
// It is ultimately in charge of doing routing to this server.

// Commented out while api is under construction.
// app.get('*', (req, res) => {
//   res.sendFile('index.html', distPath)
// })

app.use('/projects', projectsRouter);
app.use('/documents', documentsRouter);
app.use('/photos', photosRouter);

module.exports = app;
