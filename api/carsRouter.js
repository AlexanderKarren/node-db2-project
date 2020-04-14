const express = require('express');
const knex = require('knex');

const knexfile = require('../knexfile.js');
const db = knex(knexfile.development);

const router = express.Router();

router.get('/', (req, res) => {
    db('cars').then(cars => res.status(200).json(cars))
    .catch(error => res.status(500).json({ error: error.message }));
})

router.get('/:id', validateCarId, (req, res) => {
    db('cars').where("id", req.params.id).then(cars => res.status(200).json(cars[0]))
    .catch(error => res.status(500).json({ error: error.message }));
})

router.get('/:id/sales', (req, res) => {
    db('sales').where("car_id", req.params.id).then(sales => res.status(200).json(sales))
    .catch(error => res.status(500).json({ error: error.message }));
})

router.post('/', (req, res) => {
    db('cars').insert(req.body).then(cars => {
        db('cars').where("id", cars[0]).then(cars => res.status(200).json(cars[0]))
        .catch(error => res.status(500).json({ error: error.message }));
    })
    .catch(error => res.status(500).json({ error: error.message }));
})

router.put('/:i', validateCarId, (req, res) => {
    db('cars').update(req.body).where('id', req.params.id).then(cars => {
        db('cars').where("id", req.params.id).then(cars => res.status(200).json(cars[0]))
        .catch(error => res.status(500).json({ error: error.message }));
    })
    .catch(error => res.status(500).json({ error: error.message }));
})

router.delete('/:id', validateCarId, (req, res) => {
    db('cars').del().where("id", req.params.id).then(cars => res.status(204).json(cars))
    .catch(error => res.status(500).json({ error: error.message }));
})

function validateCarId(req, res, next) {
    db('cars').where("id", req.params.id).then(car => {
        if (car.length > 0) next();
        else res.status(404).json({ error: `could not find car with id ${req.params.id}`})
    })
}

module.exports = router;