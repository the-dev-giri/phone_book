 require('dotenv').config();
 const express = require('express')
 const app = express()
 require('./database/db')
 const bodyParser = require("body-parser")
 const {unknownEndpoint,errorHandler}= require('./utils/middleware')
 const PhonebookControllersRoutes = require('./routes/phonebook.route');
app.use(express.json())


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/phonebook', PhonebookControllersRoutes)
app.use(unknownEndpoint)
app.use(errorHandler)
 const PORT = process.env.PORT || 3001
 app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})