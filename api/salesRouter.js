const express = require('express');
const knex = require('knex');

const knexfile = require('../knexfile.js');
const db = knex(knexfile.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('sales').then(sales => res.status(200).json(sales))
    .catch(error => res.status(500).json({ error: error.message }));
})

router.get('/:id', validateSalesId, (req, res) => {
    db('sales').where("id", req.params.id).then(sales => res.status(200).json(sales[0]))
    .catch(error => res.status(500).json({ error: error.message }));
})

function validateSalesId(req, res, next) {
    db('sales').where("id", req.params.id).then(sales => {
        if (sales.length > 0) next();
        else res.status(404).json({ error: `could not find sale with id ${req.params.id}`})
    })
}

module.exports = router;