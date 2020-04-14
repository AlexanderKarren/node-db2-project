const express = require('express');
const knex = require('knex');

const knexfile = require('../knexfile.js');
const db = knex(knexfile.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars').then(cars => res.status(200).json(cars))
    .catch(error => res.status(500).json({ error: error.message }));
})

module.exports = router;