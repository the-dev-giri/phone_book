const mongoose = require('mongoose') 
const phoneBookSchema = new mongoose.Schema({
    contactName: {
      required: 'Please enter your name',
      trim: true,
      minLength: 4,
      maxLength: 20,
      type: String,
  },
  contactNumber: {
      required: 'Please enter your number',
      minLength: 10,
      maxLength: 10,
      type: Number,
  }
  })
  
  phoneBookSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
  
  module.exports = mongoose.model('phone_book', phoneBookSchema)