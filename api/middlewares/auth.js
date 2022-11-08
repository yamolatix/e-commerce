
const { verifyToken } = require('../helpers/generateToken')

exports.checkAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ').pop()
        const tokenData = await verifyToken(token)
        if (tokenData.user.id) {
            next()
        } else {
            res.status(409)
            res.send({ error: 'Por acá no pasas!' })
        }

    } catch (e) {
        console.log(e)
        res.status(409)
        res.send({ error: 'Tu por aqui no pasas!' })
    }
};