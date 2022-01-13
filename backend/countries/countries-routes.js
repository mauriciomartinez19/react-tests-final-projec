const express = require('express')
const router = express.Router()

const countries = require('./countries-data.json')

const wishlist = []

router.route('/').get((req, res) => {
    res.status(200).json(countries)
})

router.route('/wishlist').get((req, res) => {
    res.status(200).json(wishlist)
})

router.route('/wishlist').post((req, res) => {
    console.log(req.body)
})


module.exports = router