const express = require('express')
const app = express()
const cors = require('cors')
const cardRoute = require('./src/routes/cardRoute')

app.use(cors()) 
app.use(express.json()) 

app.use('/api', cardRoute)

app.listen(3001, () => {
    console.log('Server running on 3001')
})