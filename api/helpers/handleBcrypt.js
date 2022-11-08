const bcrypt = require("bcrypt");

exports.encrypt = (password) => {
    return bcrypt.hashSync(password, 10)
}

exports.compare = async (password, hashPassword) => {
    return await bcrypt.compare(password, hashPassword)
}