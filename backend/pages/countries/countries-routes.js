const express = require('express')
const router = express.Router()

const countries = require('./countries-data.json')

let wishlist = []

router.route('/').get((req, res) => {
    res.status(200).json(countries)
})

router.route('/wishlist').get((req, res) => {
    res.status(200).json(wishlist)
})

router.route('/wishlist').post((req, res) => {
    const { value } = req.body
    const newCountry = countries.find(country => Number(country.uncode) === Number(value))
    const exist = wishlist.find(country => Number(country.uncode) === Number(value))
    const quantity = exist?.quantity || 1
    exist ? exist.quantity++ : newCountry.quantity = quantity
    exist ? wishlist : wishlist = [...wishlist, { ...newCountry, quantity }]
    res.status(200).json(wishlist)
    console.log(wishlist)
})

router.route('/wishlist').delete((req, res) => {
    const { value } = req.body
    wishlist = wishlist.filter(country => Number(country.uncode) !== Number(value))
    res.status(200).json(wishlist)
})

module.exports = router