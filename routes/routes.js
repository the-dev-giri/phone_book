const express = require('express');
const {createP,getP,deleteP,updateP,getP_byid,unknownEndpoint} = require('../controllers/operation');
const router = express.Router()

router.post('/operation', createP)
router.get('/operation', getP)
router.delete('/operation/:id', deleteP)
router.patch('/operation/:id', updateP)
router.get('/operation/:id', getP_byid)
router.use('/operation', unknownEndpoint)

module.exports = router;

