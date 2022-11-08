const User = require("../models/User");

exports.newUserRole = async (req, res) => {
    try {
        const roleUser = await User.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })

        const newUserRole = roleUser[1][0]

        return res.status(201).json(newUserRole)

    } catch (error) {
        return res.status(500).json("Error in controller edit user role")
    }
};