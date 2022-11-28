const express = require('express');
const {createPhonebook,fetchPhonebooks,deletePhonebook,updatePhonebook,fetchPhonebook} = require('../controllers/phonebook.controllers');
const router = express.Router()

router.post('/', createPhonebook)
router.get('/', fetchPhonebooks)
router.delete('/:id', deletePhonebook)
router.patch('/:id', updatePhonebook)
router.get('/:id', fetchPhonebook)


module.exports = router;

