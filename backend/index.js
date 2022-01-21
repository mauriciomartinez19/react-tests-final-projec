const express = require('express')
const cors = require('cors')

require('./database/database')

const app = express();
app.use(cors())

app.use(express.json())

//Verify middleware
const verifyToken = require('./token/verify-controller')

const tours = require('./pages/tours/tour-routes')
const reviews = require('./pages/reviews/reviews-routes')
const contacts = require('./pages/admin-contact/admin-contact-routes')
const countries = require('./pages/countries/countries-routes')
const login = require('./pages/login/login-routes')
const verify = require('./token/verify-route')

app.use('/api/tours-data', tours)
app.use('/api/reviews-data', reviews)
app.use('/api/admin-contact', contacts)
app.use('/api/countries', countries)
app.use('/api/login', login)
//verify
app.use('/api/verify', verifyToken, verify)

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`server is listening on port: ${PORT}`)
})