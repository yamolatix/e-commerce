const { User } = require("../models");

exports.newUserRole = async (req, res) => {
    try {
        //VER ESTA RUTA EN EL FRONT. CAMBIA EL ROL A SI MISMO!
        const roleUser = await User.update({ role: req.body.role }, {
            where: { id: req.params.id },
            returning: true
        })
        const newUserRole = roleUser[1][0]

        res.status(201).json(newUserRole)
    } catch (error) {
        res.status(500).json("Error in controller newUserRole")
    }
};

exports.showAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll()
        res.status(201).json(allUsers)
    } catch (error) {
        res.status(500).json("Error in controller showAllUsers")
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await User.destroy({ where: { id: req.params.id } })
        res.status(201).json("Usuario eliminado")

    } catch (error) {
        res.status(500).json("Error in controller showAllUsers")
    }
};

