const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  all() {
    let cats = pets.cats.all()
    let dogs = pets.dogs.all()
    return cats.concat(dogs)
    // call all to grab all pets for '/'
    // return both cats and dogs concat()
  },

  get(type) {
    // Return the pets next in line to be adopted.
    // ie: pets["cats"].show or "dogs"
    return pets[type].show()
  },

  dequeue(type) {
    // Remove a pet from the queue.
    return pets[type].dequeue()
  }
}
