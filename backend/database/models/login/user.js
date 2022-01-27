const mongoose = require('mongoose')
const { Schema } = mongoose
const Wishlist = require('../countries/wishlist')

const UserSchema = new Schema({
    userName: { type: String, required: true, index: { unique: true } },
    email: { type: String, required: true, index: { unique: true } },
    age: { type: Number, required: true },
    passwordHash: { type: String, required: true },
    birth: { type: String, required: false },
    phone: { type: String, required: false },
    skills: { type: Array, required: false },
    aboutMe: { type: String, required: false },
    profImage: { type: String, required: false },
    portImage: { type: String, required: false }
})




module.exports = mongoose.model('User', UserSchema)