const express = require('express')
const json = require('body-parser').json();
const xss = require('xss')

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.json(People.get())
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  
  // const { person } = req.body
  // People.enqueue(person)

  let person = xss(req.body)
  res.json(People.enqueue(person))
})

router.delete('/', json, (req, res) => {
  // Removes person and adopts pet...
  res.json(People.dequeue())
})

module.exports = router
