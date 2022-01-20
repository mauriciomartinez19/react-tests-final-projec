const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
    userName: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true, index: { unique: true } },
    age: { type: Number, required: true },
    passwordHash: { type: String, required: true }
})

module.exports = mongoose.model('User', UserSchema)