const mongoose = require('mongoose')
const { schema } = mongoose

const UserSchema = new Schema({
    userName: { type: String, required: true, index: { unique: true } },
    passwordHash: { type: String, required: true }
})

module.exports = mongoose.mosel('User', UserSchema)