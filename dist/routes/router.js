"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productsController_1 = require("../controllers/productsController");
const priceController_1 = require("../controllers/priceController");
const priceController_2 = require("../controllers/priceController");
const router = express_1.default.Router();
/**
 * @openapi
 * /api/products:
 *  get:
 *      tags:
 *          - Products
 *      responses:
 *          200:
 *              description: Use to request all products
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              products:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          inStock:
 *                                              type: boolean
 *                                          _id:
 *                                              type: string
 *                                          brand:
 *                                              type: string
 *                                          stock:
 *                                              type: integer
 *                                          price:
 *                                              type: number
 *                                          special_price:
 *                                              type: number
 *                                          name:
 *                                              type: string
 */
router.get('/products', productsController_1.getProducts);
/**
 * @openapi
 * /clients:
 *  get:
 *      tags:
 *          - Clients
 *      responses:
 *          200:
 *              description: Use to request all clients
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              clients:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          _id:
 *                                              type: string
 *                                          name:
 *                                              type: string
 *                                          email:
 *                                              type: string
 *                                          special_price:
 *                                              type: array
 *                                              items:
 *                                                  type: string
 */
router.get('/clients', priceController_1.getClients);
/**
 * @openapi
 * /{user_id}/{product_brand}:
 *  get:
 *      tags:
 *          - Products
 *      parameters:
 *          - in: path
 *            name: user_id
 *            required: true
 *            schema:
 *              type: string
 *            description: The user ID
 *          - in: path
 *            name: product_brand
 *            required: true
 *            schema:
 *              type: string
 *            description: The product brand
 *      responses:
 *          200:
 *              description: Use to request all products of a specific brand for a specific user
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              products:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          name:
 *                                              type: string
 *                                          Brand:
 *                                              type: string
 *                                          special_price:
 *                                              type: number
 */
router.get('/:user_id/:product_brand', priceController_2.getPrice);
exports.default = router;
