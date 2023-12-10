"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const mongoose_1 = require("mongoose");
const clientSchema = new mongoose_1.Schema({
    userName: { type: String, unique: true, required: true, },
    email: { type: String, unique: true, required: true, },
    special_price: {
        type: [String],
        required: true,
    }
});
const Client = (0, mongoose_1.model)('user', clientSchema);
exports.Client = Client;
