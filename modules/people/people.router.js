const express = require('express')
const json = require('body-parser').json();
const xss = require('xss')

const PeopleService = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.json(PeopleService.get())
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  const { person } = req.body
  PeopleService.enqueue(person)
  res.json(person)
})

router.delete('/', json, (req, res) => {
  // Removes person and adopts pet...
  res.json(PeopleService.dequeue())
})

module.exports = router
