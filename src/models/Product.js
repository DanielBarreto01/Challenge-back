const mongo = require('mongoose');

const productSchema = new mongo.Schema({
    model: String,
    brand: String,
    stock: { type: Boolean, default: true },
    units: { type: Number, default: 0 }, // Agrega el campo 'units'
    price: Number,
    special_price: Number,
});



module.exports = mongo.model('Product', productSchema);