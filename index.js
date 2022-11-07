// //require ('dotenv').config()
 const express = require('express')
 const phbook = express()
// phbook.use(express.static('build'))
// phbook.use(express.json())

const http = require('http')

const phonebook = 
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
phbook.get('/',(req,res)=>{
    res.send('<h1>My Phone Book </h1>')
})
//for fetching all data
  phbook.get('/api/Phonebook/',(req,res)=>{
    console.log(phonebook)
    res.json(phonebook)
  })
/*
  //for fetching a single data
  phbook.get('/api/Phonebook/:id',(req,res)=>{
    const id = Number(req.params.id)
    const phB= phonebook.find(phB => phB.id === id)
    if (phB){
        console.log(phB)
        res.json(phB)
    }
    else{
        res.status(404).end()
    }
    
  })
*/
phbook.delete('/api/phonebook/:id',(req, res) => {
  console.log('data is delete now') 
  const id = Number(req.params.id)
  phB = phonebook.filter(phB => phB.id !== id) 
  res.status(204).end()
})
const PORT = 3001
phbook.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})