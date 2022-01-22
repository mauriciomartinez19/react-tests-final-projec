const express = require('express')
const router = express.Router()

router.route('/').post((req, res) => {
    const { name, email } = req.user
    res.status(202).json('the token is valid')
})

module.exports = router