const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://nabeel:Mudassir1996@cluster0.y9zqgt2.mongodb.net/')
.then(()=>{
    console.log('DB live on server')
})
.catch(err => console.log('DB error'))