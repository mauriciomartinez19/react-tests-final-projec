const mongoose = require('mongoose');
const { Schema } = mongoose;

const WishlistSchema = new Schema({
    name: { type: String, required: true },
    firstid: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: false },
    user: { type: String, required: true }
});

module.exports = mongoose.model('Wishlist', WishlistSchema);