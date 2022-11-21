const Phonebook = require('../models/model')
const createP =  (request, response) =>{
    const body = request.body

    if (!body.contact_name) {
        return response.status(400).json({
            error: 'contact name missing'
        })
    }
    else if (!body.contact_number) {
        return response.status(400).json({
            error: 'contact number missing'
        })
    }

    const phone_book = new Phonebook({
        contact_name: body.contact_name,
        contact_number: body.contact_number,
    })

    phone_book.save().then(savedphone_book => {
        response.json(savedphone_book)
    })
}
   
const getP = (req, res) =>{
    Phonebook.find({}).then(Phonebook => {
        res.json(Phonebook)
    })
}


  const deleteP =  async (req, res) => {
    try {
        const id = req.params.id;
        const deletedphone_book = await Phonebook.findByIdAndDelete(id)
        res.send(`Document with ${deletedphone_book.contact_name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}
  
  const updateP = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedphone_book = req.body;
        const options = { new: true };

        const result = await Phonebook.findByIdAndUpdate(
            id, updatedphone_book, options
        )
        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}


  const getP_byid =  (req, res) => {
    Phonebook.findById(req.params.id).then(Phonebook => {
      res.json(Phonebook)
    })
  }
  
  const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
  }
  
  

module.exports = {createP,getP,deleteP,updateP,getP_byid,unknownEndpoint}
