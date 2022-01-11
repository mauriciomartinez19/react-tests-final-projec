const express = require('express')
const router = express.Router()

const contacts = [{
    id: 1,
    name: 'Mauricio Martinez',
    email: 'maurimar19@hotmail.com',
    msg: 'msg 1 de prueba'
}]

router.route('/').get((req, res) => {
    res.status(200).send(contacts)
})

router.route('/').post((req, res) => {
    const { name, email, msg, id } = req.body
    const newContact = { id, name, email, msg }
    let newContacts = [...contacts, newContact]
    res.status(200).send(newContacts)
})

module.exports = router