const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors())

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

const tours = require('./tours/tour-routes')
const reviews = require('./reviews/reviews-routes')
const contacts = require('./admin-contact/admin-contact-routes')

app.use('/api/tours-data', tours)
app.use('/api/reviews-data', reviews)
app.use('/api/admin-contact', contacts)

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
})