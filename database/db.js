const mongoose = require('mongoose')

const url = process.env.MONGODB_URI
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const phone_book_Schema = new mongoose.Schema({
  contact_name: {
    required: true,
    type: String
},
contact_number: {
    required: true,
    type: Number
}
})

phone_book_Schema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('contact_list', phone_book_Schema)