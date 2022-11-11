const { Product } = require("../models");

exports.showAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.findAll()
        res.status(201).json(allProducts)
    } catch (error) {
        res.status(500).json({ error: "Error in controller showAllProducts" })
    }
};

exports.individualProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ msg: "Error in controller individualProduct", error: error })
    }
};

exports.addProduct = async (req, res) => {
    try {
        await Product.findOrCreate({
            where: { ...req.body }
        });
        res.status(201).json({ msg: "Producto agregado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error in controller addProduct", error: error })
    }
};

exports.editProduct = async (req, res) => {
    try {
        await Product.update(req.body, {
            where: { id: req.params.id },
            returnning: true,
        });

        res.status(201).json({ msg: "Producto modificado correctamente" })
    } catch (error) {
        res.status(500).json({ msg: "Error in controller editProduct", error: error })
    }
};

exports.deleteUser = async (req, res) => {
    try {
        await Product.destroy({ where: { id: req.params.id } })
        res.status(201).json({ msg: "Producto eliminado" })

    } catch (error) {
        res.status(500).json({ msg: "Error in controller deleteUser", error: error })
    }
};
