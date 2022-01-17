const mongoose = require('mongoose');
const { Schema } = mongoose;

const WishlistSchema = new Schema({
    name: { type: String, required: true },
    firstid: { type: String, required: true },
    secid: { type: String, required: true },
    uncode: { type: Number, required: true },
    population: { type: Number, required: true },
    price: { type: Number, required: true },
    School: { type: Number, required: true },
    Co2: { type: Number, required: true },
    PBI: { type: Number, required: true },
    lifeexp: { type: Number, required: true },
    Covid: { type: Number, required: true },
    quantity: { type: Number, required: false }
});

module.exports = mongoose.model('Wishlist', WishlistSchema);