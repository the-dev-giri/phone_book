 require('dotenv').config();
 const express = require('express')
 const app = express()
 const phone_book = require('./database/db')
 const operationRoutes = require('./routes/routes');
 
app.use(express.json())
// app.use(express.static('build'))
app.use('/api', operationRoutes)
// app.use('/api/users', routes)
 
 const PORT = process.env.PORT || 3001
 app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})