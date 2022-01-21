const express = require('express')
const router = express.Router()

router.route('/').post((req, res) => {
    res.status(202).json('welcome, the token is valid')
})

module.exports = router