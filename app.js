
//Esta linha que permite a criacao do arquivo env
require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const favicon = require('serve-favicon');
const hbs = require('hbs');
const logger = require('morgan');
const path = require('path');

const app = express();

// require database configuration
require('./configs/db.config');
require('./configs/session.config')(app);

// Middleware Setup
//logger informa os passos feitos 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerPartials(path.join(__dirname, 'views', 'partials'))

app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));


// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';

const index = require('./routes/appRoutes');
app.use('/', index);

//authentication
const authRoutes = require('./routes/authRoutes');
app.use('/', authRoutes);

//Rotas protegidasconst 
protectedRoutes = require('./routes/protectedRoutes.routes');
app.use('/', protectedRoutes);

module.exports = app;