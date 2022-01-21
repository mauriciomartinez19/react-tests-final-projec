const jwt = require('jsonwebtoken')

const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"]

    if (!token) {
        return res.status(403).json("A token is required for atuhentication")
    }
    try {
        const decoded = jwt.verify(token, 'secret123');
        console.log(decoded)
        return next()
    } catch (err) {
        return res.status(401).json("Invalid Token")
    }
}

module.exports = verifyToken