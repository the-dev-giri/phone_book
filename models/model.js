const mongoose = require('mongoose') 
const phone_book_Schema = new mongoose.Schema({
    contact_name: {
      required: true,
      type: String,
  },
  contact_number: {
      required: true,
      type: Number,
  }
  })
  
  phone_book_Schema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  module.exports = mongoose.model('phone_book', phone_book_Schema)