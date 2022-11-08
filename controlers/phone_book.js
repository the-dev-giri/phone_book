phbook.get('/api/Phonebook/',(req,res)=>{
    console.log(phonebook)
    res.json(phonebook)
})
phbook.get('/api/Phonebook/:id',(req,res)=>{
    const id = Number(req.params.id)
    const phB= phonebook.find(phB => phB.id === id)
    if (phB){
        // console.log(phB)
        res.json(phB)
    }
    else{
        res.status(404).end()
    }
    
  })


  phbook.delete('/api/phonebook/:id',(req, res) => {
    console.log('data is delete now') 
    const id = Number(req.params.id)
    phB = phonebook.filter(phB => phB.id !== id) 
    res.status(204).end()
  })

