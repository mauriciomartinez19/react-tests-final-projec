const mongoose = require('mongoose')

const URI = 'mongodb://localhost/finalproyect'

mongoose.conect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true
});