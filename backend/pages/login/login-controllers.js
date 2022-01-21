const User = require('../../database/models/login/user')
const bcrypt = require('bcrypt');


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

const hashPassword = async (password, saltRounds) => {
    const passwordHash = await bcrypt.hash(password, saltRounds)
    return passwordHash
}

module.exports = { validation, hashPassword }