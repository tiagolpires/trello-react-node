const express = require('express')
const cors = require('cors')
const cardRoute = require('./src/routes/cardRoute')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors()) 
app.use(express.json()) 

app.use('/api', cardRoute)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, console.log(`Server running at ${PORT}`))