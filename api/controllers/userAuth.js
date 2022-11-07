const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../config/auth.config")


exports.register = async (req, res) => {
    try {
        const password = bcrypt.hashSync(req.body.password, 10);
        const { username, name, lastname, email } = req.body;

        await User.create({ username, name, lastname, email, password, });

        return res.status(201).json("User created");

    } catch (error) {
        return res.status(500).json("Error in controller register")
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ where: { username } })

        if (!user) res.status(404).json("The user is not registered")

        if (bcrypt.compareSync(password, user.password)) {
            const token = jwt.sign({ user: user }, secret)
            res.json({ token: token })
        } else {
            res.status(401).json("Incorrect password")
        }
    } catch (error) {
        return res.status(500).json("Error in controller login")

    }
};

exports.logout = async (req, res) => {
    try {
        const token = undefined
        res.status(200).json("Logout!")
    } catch (error) {
        return res.status(500).json("Error in controller logout")

    }
};