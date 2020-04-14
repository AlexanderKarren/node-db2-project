const express = require('express');

const carsRouter = require('./carsRouter.js');
const salesRouter = require('./salesRouter.js');

const server = express();

server.use(express.json());
server.use('/api/cars', carsRouter);
server.use('/api/sales', salesRouter);

module.exports = server;