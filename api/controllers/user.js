const User = require("../models/User");

exports.editUser = async (req, res) => {
    try {
        const updateUser = await User.update(req.body, {
            where: { id: req.params.id },
            returning: true
        })

        const userEdited = updateUser[1][0]

        return res.status(201).json(userEdited)

    } catch (error) {
        return res.status(500).json("Error in controller register")
    }
};