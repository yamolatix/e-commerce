
const { verifyToken } = require('../helpers/generateToken')
const { User } = require('../models')

exports.checkRoleAuth = (roles) => async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        const user = await User.findByPk(tokenData.user.id)

        if ([].concat(roles).includes(user.role)) {
            next()
        } else {
            res.status(409).send({ error: "You don't have permissions" })
        }

    } catch (e) {
        console.log(e)
        res.status(409).send({ error: "You can't go through here" })
    }
};