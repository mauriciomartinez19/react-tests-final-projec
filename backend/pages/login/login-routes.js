const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const router = express.Router()

const User = require('../../database/models/login/user')

//
const { validation, hashPassword } = require('./login-controllers')

const users = [
    {
        userName: 'Mauricio',
        password: 'testpassword'
    }, {
        userName: 'Pedro',
        password: 'pedro123456'
    }, {
        userName: 'Jose',
        password: 'miguel123456'
    }
]


router.route('/').post(async (req, res) => {
    const { userName, password } = req.body
    const { mes, user } = await validation(userName, password)
    console.log(mes, user)
    if (user) {
        const token = jwt.sign(
            {
                name: user[0].userName,
                email: user[0].email,
                id: user[0]._id
            },
            'secret123',
            { expiresIn: '20m' }
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

module.exports = router