const express = require('express')
const cors = require('cors')
const cardRoute = require('./src/routes/cardRoute')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors()) 
app.use(express.json()) 

app.use('/api', cardRoute)

app.listen(PORT, console.log(`Server running at ${PORT}`))