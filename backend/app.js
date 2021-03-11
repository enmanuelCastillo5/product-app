const express = require('express')
const helmet = require("helmet");
var morgan = require('morgan')
var bodyParser = require('body-parser')
const productsRoutes = require('./routes/products');

const app = express();
app.use(helmet());
app.use(morgan('tiny'))
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json());

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/', productsRoutes)
module.exports = app;