const { User } = require("../models");
const { encrypt, compare } = require('../helpers/handleBcrypt');
const { tokenSign } = require('../helpers/generateToken');

exports.register = async (req, res) => {
    try {
        const { username, name, lastname, email, role } = req.body;
        const password = encrypt(req.body.password)

        await User.create({ username, name, lastname, email, role, password: password });

        res.status(201).json("User created");
    } catch (error) {
        res.status(500).json("Error in controller register")
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } })

        if (!user) res.status(404).json("The user is not registered")

        const checkPassword = await compare(password, user.password)

        if (checkPassword) {
            const tokenSession = await tokenSign(user)
            res.status(201).json({ token: tokenSession })
        } else {
            res.status(409).json("Incorrect password")
        }
    } catch (error) {
        res.status(500).json("Error in controller login")
    }
};

