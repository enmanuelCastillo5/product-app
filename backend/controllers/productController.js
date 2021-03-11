const Product = require('../models/Product');

const addProducts = async (req, res) => {
    try {
        const { name, description, size, unitaryPrice } = req.body
        const product = Product({name, description, size, unitaryPrice})

        if (req.file) {
            const { filename } = req.file
            product.setImgUrl(filename)
        }

        const productStored = await product.save()
        res.status(201).send(productStored)
    } catch (error) {
        res.status(500).send({ message: error.message })
        console.log(error)
    }
}

const getProducts = async (req, res) => {
    const products = await Product.find().lean().exec();
    res.status(200).send(products)
}

module.exports = {
    addProducts,
    getProducts
}