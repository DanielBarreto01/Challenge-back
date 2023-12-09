const Product = require('../models/Product');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({inStock: true});
        res.json({ products }); // Envuelve los productos en un objeto con la clave 'products'
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'error to get products' });
    }
}
const createProduct = async (req, res) => {
    
};

module.exports = {
    getProducts,
    createProduct,
  
};