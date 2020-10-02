const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use('/people', require('../people/people.router'))
app.use('/pets', require('../pets/pets.router'))

// app.get('/api/cat', (req, res) => {
//     return res.json({
//         imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
//         imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
//         name: 'Fluffy',
//         sex: 'Female',
//         age: 2,
//         breed: 'Bengal',
//         story: 'Thrown on the street'
//       })
//   })
  
//   app.get('/api/dog', (req, res) => {
//     return res.json({
//         imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
//         imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
//         name: 'Zeus',
//         sex: 'Male',
//         age: 3,
//         breed: 'Golden Retriever',
//         story: 'Owner Passed away'
//       })
//   })

module.exports = app
