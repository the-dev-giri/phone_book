const express = require('express');
const {createP,getP} = require('../controllers/operation');
const router = express.Router()
//Post Method
router.post('/operation', createP)
router.get('/operation', getP)

module.exports = router;

