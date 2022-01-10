const express = require('express')
const router = express.Router()

const reviews = require('./reviews-data.json')

router.route('/').get((req, res) => {
    res.status(200).json(reviews)
})


module.exports = router