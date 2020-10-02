const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  res.json(Pets.all(''))
})

router.get('/cat', (req, res) => {
  // Return spec cat currently up for adoption.
  res.json(Pets.get('cats'))
})

router.get('/dog', (req, res) => {
  // Return spec dog currently up for adoption.
  res.json(Pets.get('dogs'))
})

router.delete('/cat', json, (req, res) => {
  // Removes pet and adopts pet...
})

router.delete('/dog', json, (req, res) => {
  // Removes pet and adopts pet...
})

module.exports = router
