const express = require('express');
const { clientsController } = require('../controllers/clientsController');
const { productsController } = require('../controllers/productsController');
const { salesController } = require('../controllers/salesController');

const router = express.Router();

clientsController(router);
productsController(router);
salesController(router);

module.exports = router