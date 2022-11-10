app.post('/api/phone_book', (request, response) => {
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
  
    const phone_book = {
      contact_name: body.contact_name,
      contact_number: body.contact_number,
      id: generateId(),
    }
  
    phone_book = phone_Book.concat(phone_book)
  
    response.json(phone_book)
  })
  
  app.get('/api/phone_book', (req, res) => {
    res.json(phone_book)
  })