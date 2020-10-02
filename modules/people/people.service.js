const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const people = new Queue()
store.people.forEach(person => people.enqueue(person))

// --------------------

module.exports = {
  get() {
    // Return all people in the queue.
    return people.all()
  },

  /* store.forEach(user => peopleQueue.enqueue(user));
       const users = peopleQueue.display();
       res.json(users);
  */

  enqueue(person) {
    // Add a person to the queue.
    console.log('ENQUEUE', people.peek())
    return people.enqueue(person)
  },


  dequeue() {
    // Remove a person from the queue.
    return people.dequeue()
  }
}
