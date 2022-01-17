const express = require('express')
const router = express.Router()

const {
    getPeople,
    putPeople,
    deletePeople
} = require('./tours-controllers')

router.route('/').get(getPeople).put(putPeople)

router.route('/:id').delete(deletePeople)

module.exports = router
