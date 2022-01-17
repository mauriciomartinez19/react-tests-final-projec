const express = require('express')
const router = express.Router()


const Country = require('../../database/models/countries/country')
const Wishlist = require('../../database/models/countries/wishlist')


router.route('/').get(async (req, res) => {
    const Countries = await Country.find();
    res.status(200).json(Countries)
})

router.route('/wishlist').get(async (req, res) => {
    const Wishlists = await Wishlist.find()
    console.log(Wishlists)
    res.status(200).json(Wishlists)
})

router.route('/wishlist').post(async (req, res) => {
    const { value, name } = req.body
    const exist = await Wishlist.findOne({ name: name })
    if (!exist) {
        const { name, price, firstid } = await Country.findById(value)
        const newCountry = new Wishlist({
            name: name,
            price: price,
            firstid: firstid,
            quantity: 1
        })
        await newCountry.save()
    } else {
        const newQuantity = exist.quantity + 1
        const newCountry = await Wishlist.updateOne({ name: name }, { quantity: newQuantity }, {
            new: true
        })
    }

    const Wishlists = await Wishlist.find()
    res.status(200).json(Wishlists)
})

router.route('/wishlist').delete(async (req, res) => {
    const { value } = req.body
    await Wishlist.findByIdAndRemove(value)
    const Wishlists = await Wishlist.find()
    res.status(200).json(Wishlists)
})

module.exports = router