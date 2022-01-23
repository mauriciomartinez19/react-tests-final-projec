const express = require('express')
const router = express.Router()


const Country = require('../../database/models/countries/country')
const Wishlist = require('../../database/models/countries/wishlist')
const User = require('../../database/models/login/user')


router.route('/').get(async (req, res) => {
    const { id } = req.body
    const Countries = await Country.find();
    res.status(200).json(Countries)
})

router.route('/wishlist/:id').get(async (req, res) => {
    const { id } = req.params
    console.log('params id' + id)
    const Wishlists = await Wishlist.find({ user: id })
    res.status(200).json(Wishlists)
})

router.route('/wishlist').post(async (req, res) => {
    const { value, name, id } = req.body
    const exist = await Wishlist.find({ name: name, user: id }).exec();
    if (!exist.length) {
        const { name, price, firstid } = await Country.findById(value)
        const newCountry = new Wishlist({
            name: name,
            price: price,
            firstid: firstid,
            quantity: 1,
            user: id
        })
        await newCountry.save()
    } else {
        const newQuantity = exist[0].quantity + 1
        const newCountry = await Wishlist.updateOne({ name: name, user: id }, { quantity: newQuantity }, {
            new: true
        })
    }

    const Wishlists = await Wishlist.find({ user: id })
    res.status(200).json(Wishlists)
})

router.route('/wishlist').delete(async (req, res) => {
    const { value, id } = req.body
    await Wishlist.findOneAndRemove({ _id: value, user: id })
    const Wishlists = await Wishlist.find({ user: id })
    res.status(200).json(Wishlists)
})

module.exports = router