const express = require('express')
const json = express.json()
const xss = require('xss')

const PeopleService = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  res.json(PeopleService.get())
})

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  if(!req.body){
      res.status(400).json('Name not included in body')
   }
    let newPerson = xss(req.body)
    console.log('post', newPerson)
    
    res.json(PeopleService.enqueue(newPerson))
})

router.delete('/', json, (req, res) => {
  // Removes pet and adopts pet...
  res.json(PeopleService.dequeue())
})

module.exports = router
