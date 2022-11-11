const express = require('express');

const router = express.Router()

module.exports = router;
//Post Method
router.post('/controlers/phone_book', (req, res) => {
    res.send('Post API')
})

//Get all Method
router.get('/controlers/phone_book', (req, res) => {
    res.send('Get All API')
})

//Get by ID Method
router.get('/controlers/phone_book/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update by ID Method
router.patch('/controlers/phone_book/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/controlers/phone_book/:id', (req, res) => {
    res.send('Delete by ID API')
})