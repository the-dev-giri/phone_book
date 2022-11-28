const Phonebook = require('../models/phonebook.models')
const createPhonebook =  (request, response) =>{
    const phonebook = request.body

    if (!phonebook.contactName) {
        return response.status(400).json({
            error: 'contact name is missing'
        })
    }
    else if (!phonebook.contactNumber) {
        return response.status(400).json({
            error: 'contact number is missing'
        })
    }

    const phoneBook = new Phonebook({
        contactName: phonebook.contactName,
        contactNumber: phonebook.contactNumber,
    })

   phoneBook.save().then(savedPhoneBook => {
        response.json(savedPhoneBook)
    })
    
}
   
const fetchPhonebooks = async (req, res) =>{
    try{
    Phonebook.find({}).then(dbPhonebook => {
        res.json(dbPhonebook)
    })
}
catch (error) {
    res.status(400).json({ message: 'unable to find Phonebook' })
}
}


  const deletePhonebook =  async (req, res) => {
    try {
        const id = req.params.id;
        const deletedphone_book = await Phonebook.findByIdAndDelete(id)
        res.send(`Document with ${deletedphone_book.contactName} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
  
  const updatePhonebook = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedPhonebook = req.body;
        const options = { new: true, runValidator : true, context:'query'};

        const updatedResult = await Phonebook.findByIdAndUpdate(
            id, updatedPhonebook, options
        )
        res.send(updatedResult)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const fetchPhonebook = async (req, res) => {
 try{
      await Phonebook.findById(req.params.id).then(phonebook => {
      res.json(phonebook)
    })
  }
 catch (error) {
    res.status(400).json({ message: 'This contact is not avelable' })
}
}
  

module.exports = {createPhonebook,fetchPhonebooks,deletePhonebook,updatePhonebook,fetchPhonebook}
