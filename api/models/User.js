
const S = require("sequelize");
const db = require("../db");

class User extends S.Model { }

User.init({
    username: {
        type: S.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isAlpha: {
                msg: "El username solo puede contener letras"
            },
            len: {
                args: [4, 25],
                msg: 'El username tiene que tener 4 caracteres como mínimo y 10 como máximo.'
            }
        },
    },
    name: {
        type: S.INTEGER,
        allowNull: false,
    },
    lastname: {
        type: S.STRING,
        allowNull: false,
    },
    role: {
        type: S.STRING,
        defaultValue: "user"
    },
    email: {
        type: S.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: S.STRING,
        allowNull: false,
        len: {
            args: [3, 10],
            msg: 'La contraseña tiene que tener 3 caracteres como mínimo y 10 como máximo.'
        }
    },
    adress: {
        type: S.STRING,
    },
    phone: {
        type: S.STRING,
    }
}, { timestamps: false, sequelize: db, modelName: 'users' });

module.exports = User;