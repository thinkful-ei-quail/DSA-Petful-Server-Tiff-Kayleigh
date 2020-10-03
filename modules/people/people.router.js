const express = require('express')
const json = require('body-parser').json();

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.status(200).json(People.get())
})

router.post('/', json, (req, res) => {
  let {person} = req.body
  People.enqueue(person)
  res.status(201).json(People.get())
})

router.delete('/', json, (req, res) => {
  // Removes person and adopts pet...
  res.status(204).json(People.dequeue())
})

module.exports = router
