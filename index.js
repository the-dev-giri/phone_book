// //require ('dotenv').config()
 const express = require('express')
 const phbook = express()
// phbook.use(express.static('build'))
// phbook.use(express.json())

const http = require('http')

const phone_book = 
    [
        { 
          "id": 1,
          "name": "Ankit Hooda", 
          "number": "040-123456"
        },
        { 
          "id": 2,
          "name": "Rohan Yadav", 
          "number": "39-44-5323523"
        },
        { 
          "id": 3,
          "name": "Nikhil Sharma", 
          "number": "12-43-234345"
        },
        { 
          "id": 4,
          "name": "Mukesh Saini", 
          "number": "39-23-6423122"
        }
    
]
app.get('/',(req,res)=>{
    res.send('<h1>My Phone Book </h1>')
})
//for fetching all data
  app.get('/api/phone_book/',(req,res)=>{
    console.log(phone_book)
    res.json(phone_book)
  })
/*
  //for fetching a single data
  app.get('/api/Phonebook/:id',(req,res)=>{
    const id = Number(req.params.id)
    const phb= phonebook.find(phb => phb.id === id)
    if (phb){
        console.log(phb)
        res.json(phb)
    }
    else{
        res.status(404).end()
    }
    
  })
*/
app.delete('/api/phone_book/:id',(req, res) => {
  console.log('data is delete now') 
  const id = Number(req.params.id)
  phb = phone_book.filter(phb => phb.id !== id) 
  res.status(204).end()
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})