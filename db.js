const mongoose = require('mongoose')

 const noteSchema = new mongoose.Schema({
    content: String,
     date: Date,
     important: Boolean,
 })

 const Note = mongoose.model('Note', noteSchema)

mongoose
  .connect(url)
  .then((result) => {
    console.log('connected')
     const note = new Note({
        content: 'Htmal is easy',
         date: new Date(),
       important: true,
    })

    console.log(note)
    return note //note.save()
    }).then(() => {
      console.log('note saved!')
      return mongoose.connection.close()

   })
   .catch((err) => console.log(err))

   Note.find({important:true}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close() 
   })
