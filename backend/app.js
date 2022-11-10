let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


let indexRouter = require('./routes/index');
let usersRouter = require('./routes/projects');

let app = express();
let distPath = '../frontend/dist'

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(distPath))

// Makes sure we serve the Svelte app first and foremost so it renders with every get request.
// It is ultimately in charge of doing routing to this server. 
app.get('*', (req, res) => {
  res.sendFile('index.html', distPath)
})

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
