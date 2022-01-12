const express = require('express')
const router = express.Router()

const countries = require('./countries-data.json')

router.route('/').get((req, res) => {
    res.status(200).json(countries)
})


module.exports = router