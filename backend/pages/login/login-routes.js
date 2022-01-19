const express = require('express')
const router = express.Router()

const users = [
    {
        userName: 'Mauricio',
        password: 'mauri12345'
    }, {
        userName: 'Pedro',
        password: 'pedro12345'
    }
]
const bcrypt = require('bcrypt');
const saltRounds = 10;

router.route('/').post(async (req, res) => {
    const { userName, password } = req.body
    const response = await register(userName, password)
    res.json(response)
})

const register = async (userName, password) => {
    const exist = users.filter(user => user.userName == userName)
    console.log(exist)
    if (exist.length) {
        const saltRounds = 10
        console.log(password, exist[0].password)
        const passwordHash = await bcrypt.hash(exist[0].password, saltRounds)
        const response = await bcrypt.compare(password, passwordHash)
        let mes = ''
        return (response
            ? mes = 'valid user'
            : mes = 'wrong password')
    } return (mes = 'user name doesnt exist')
}

module.exports = router