const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/FinalProyect'

mongoose.connect(URI, {
    useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
})