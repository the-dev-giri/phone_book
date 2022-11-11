const router = require("../routes/routes")

router.post('/api/phone_book', (request, response) => {
    const body = request.body
  console.log(body)
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
    const phone_Book = new phone_book( {
      contact_name: body.contact_name,
      contact_number: body.contact_number,
    })
    phone_Book.save().then(savedphone_book => {
      response.json(savedphone_book)
      
    })
    
  })
  router.get('/api/phone_book', (request, response) => {
    phone_book.find({}).then(phone_Book => {
      response.json(phone_Book)
    })
  })
  
  router.delete('/api/phone_book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deletedphone_book = await phone_book.findByIdAndDelete(id)
        res.send(`Document with ${deletedphone_book.contact_name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
  
  router.patch('/api/phone_book/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedphone_book = req.body;
        const options = { new: true };

        const result = await phone_book.findByIdAndUpdate(
            id, updatedphone_book, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})


  router.get('/api/phone_book/:id', (request, response) => {
    phone_book.findById(request.params.id).then(phone_Book => {
      response.json(phone_Book)
    })
  })
  
  const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint' })
  }
  
  app.use(unknownEndpoint)
