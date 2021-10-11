const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/testDB',
{   useCreateIndex: true,
    useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{

    console.log("MongoDb Connection Successful")
}).catch((err)=>{
    console.log("Connection Failed. Error"+err)
})
