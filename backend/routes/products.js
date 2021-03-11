const express = require('express');
const api = express.Router();
const upload = require('../libs/storage');
const { addProducts, getProducts } = require('../controllers/productController');

api.post('/products', upload.single('image'), addProducts);
api.get('/products', getProducts);

module.exports = api