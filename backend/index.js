const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())



const tours = require('./tours/tour-routes')
const reviews = require('./reviews/reviews-routes')


app.use('/api/tours-data', tours)
app.use('/api/reviews-data', reviews)

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
})