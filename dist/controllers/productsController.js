"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = exports.getProducts = void 0;
const Product_1 = require("../models/Product");
const getProducts = async (req, res) => {
    try {
        const products = await Product_1.Product.find({ inStock: true });
        res.json({ products });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los productos' });
    }
};
exports.getProducts = getProducts;
const createProduct = async (req, res) => {
    // Implementa la lógica para crear un producto
};
exports.createProduct = createProduct;
