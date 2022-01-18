const express = require('express')
const router = express.Router()

let contacts = [{
    id: 1,
    name: 'Mauricio Martinez',
    email: 'maurimar19@hotmail.com',
    message: 'msg 1 de prueba'
}]

const AdminContact = require('../../database/models/admin-contact/adminContact')

router.route('/').get(async (req, res) => {
    const adminContacts = await AdminContact.find()
    res.status(200).send(adminContacts)
})

router.route('/').post((req, res) => {
    console.log(req.body)
    const { name, email, message, id } = req.body
    const newContact = { id, name, email, message }
    contacts = [...contacts, newContact]
    res.status(200).json('SUCCES')
})

module.exports = router