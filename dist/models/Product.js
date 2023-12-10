"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const ProductSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    inStock: { type: Boolean, default: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true },
    stock: { type: Number, required: true },
    special_price: { type: Number, required: true },
});
const Product = (0, mongoose_1.model)('Product', ProductSchema);
exports.Product = Product;
