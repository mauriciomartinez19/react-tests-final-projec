const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const router = express.Router()

var mongoose = require('mongoose');


const User = require('../../database/models/login/user')

//
const { validation, hashPassword } = require('./login-controllers')

router.route('/').post(async (req, res) => {
    const { userName, password } = req.body
    const { mes, user } = await validation(userName, password)
    if (user) {
        const token = jwt.sign(
            {
                name: user[0].userName,
                email: user[0].email,
                id: user[0]._id
            },
            'secret123',
            { expiresIn: '6h' }
        )
        res.json({ status: mes, user: token })
    } else res.json({ status: mes, user: false })
})

router.route('/register').post(async (req, res) => {
    try {
        const { userName, email, age, password } = req.body
        const exist = await User.find({ userName: userName })
        if (!exist.length) {
            const passwordHash = await hashPassword(password, 10)
            const newUser = new User({
                userName: userName,
                email: email,
                age: age,
                passwordHash: passwordHash
            })
            await newUser.save()
            return res.status(200).json('User registered')
        } else {
            res.status(400).json('The user has been used')
        }
    } catch (error) {
        console.error(error);
        res.status(400).json('email already exist')
    }
})

router.route('/register').put(async (req, res) => {
    const { userName, email, phone, birth, aboutMe, skills, profImage, portImage, id } = req.body
    try {
        const user = await User.findByIdAndUpdate(id, {
            userName: userName,
            email: email,
            phone: phone,
            birth: birth,
            aboutMe: aboutMe,
            skills: skills,
            profImage: profImage,
            portImage: portImage
        }, { new: true })
        res.status(200).json(user)
    } catch (error) { res.json(error.message) }

})

router.route('/:id').get(async (req, res) => {
    const { id } = req.params
    const { userName, email, age, phone, skills, aboutMe, birth, profImage, portImage } = await User.findById(id)
    const userData = {
        userName, email, age, phone, skills, aboutMe, birth, profImage, portImage
    }
    res.status(200).json(userData)
})

module.exports = router