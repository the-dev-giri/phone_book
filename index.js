 require('dotenv').config();
 const express = require('express')
 const app = express()
 const phone_book = require('./database/db')
app.use(express.json())
app.use(express.static('build'))
const routes = require('./routes/routes');
app.use('/api', routes)
 const PORT = process.env.PORT || 3001 
 app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})