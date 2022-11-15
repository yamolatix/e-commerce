const jwt = require('jsonwebtoken')
const { secret } = require("../config/auth.config")

exports.tokenSign = async (user) => {
    return jwt.sign({ user: user }, secret);
}

exports.verifyToken = async (token) => {
    try {
        return jwt.verify(token, secret)
    } catch (error) {
        return null
    }
}

exports.decodeSign = (token) => {
    return jwt.decode(token, null)
}