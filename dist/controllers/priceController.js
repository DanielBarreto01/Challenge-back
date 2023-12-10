"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrice = exports.getClients = void 0;
const Product_1 = require("../models/Product");
const users_1 = require("../models/users");
const getPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, product_brand } = req.params;
        const user = yield users_1.Client.findById(user_id).populate('special_price');
        const products = yield Product_1.Product.find({ brand: { $regex: new RegExp(`^${product_brand}$`, "i") }, stock: { $ne: 0 } });
        console.log(user);
        console.log(products);
        if (!user || !products.length) {
            res.status(404).json({ message: 'User or products not found' });
            return;
        }
        console.log(user.special_price);
        const hasSpecialPrice = user && user.special_price
            ? user.special_price.some((item) => item && item.toLowerCase() === product_brand.toLowerCase())
            : false;
        console.log(hasSpecialPrice);
        if (!hasSpecialPrice) {
            res.json({
                products: products.map(prod => {
                    return {
                        name: `${prod.brand} - ${prod.name}`,
                        price: prod.price
                    };
                })
            });
        }
        else {
            res.json({
                products: products.map(prod => {
                    const hasSpecialPrice = user.special_price && user.special_price.some((item) => item.toLowerCase() === prod.brand.toLowerCase());
                    return {
                        name: prod.name,
                        Brand: prod.brand,
                        special_price: hasSpecialPrice ? prod.special_price : prod.price
                    };
                })
            });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Out of service' });
    }
});
exports.getPrice = getPrice;
//obtener los ususraios
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clients = yield users_1.Client.find();
        res.status(200).json({ clients });
    }
    catch (error) {
        throw error;
    }
});
exports.getClients = getClients;
