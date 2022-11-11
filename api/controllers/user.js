const { User } = require("../models");

exports.editUser = async (req, res) => {
    try {
        const { username, email, adress, phone } = req.body
        const updateUser = await User.update({ username, email, adress, phone }, {
            where: { id: req.params.id },
            returning: true
        })
        const userEdited = updateUser[1][0]

        res.status(201).json(userEdited)
    } catch (error) {
        res.status(500).json("Error in controller register")
    }
};