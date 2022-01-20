const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()

const User = require('../../database/models/login/user')

const users = [
    {
        userName: 'Mauricio',
        password: 'testpassword'
    }, {
        userName: 'Pedro',
        password: 'pedro12345'
    }
]
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.route('/').post(async (req, res) => {
    const { userName, password } = req.body
    const { mes, user } = await validation(userName, password)
    console.log(mes, user)
    if (user) {
        const token = jwt.sign(
            {
                name: user.userName,
                email: user.email
            },
            'secret123'
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

const hashPassword = async (password, saltRounds) => {
    const passwordHash = await bcrypt.hash(password, saltRounds)
    return passwordHash
}

const validation = async (userName, password) => {
    const exist = await User.find({ userName: userName })
    if (exist.length) {
        const response = await bcrypt.compare(password, exist[0].passwordHash)
        let mes = ''
        return (response
            ? {
                mes: 'valid user',
                user: exist
            }
            : {
                mes: 'wrong password',
                user: undefined
            })
    } return {
        mes: 'user name doesnt exist',
        user: undefined
    }
}

module.exports = router