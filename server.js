const express = require('express')
const cors = require('cors')
const app = express()
const routes = require('./api/routes/index')
require('./api/db/connection')
app.use(cors())

app.use(express.json())


app.use('/', routes)

app.listen(8000, ()=>{


    console.log("app listening at port"+8000)
})