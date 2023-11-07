const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    "id": { type: Number},
    "name": { type: String, maxLength: 255 },
    "username": { type: String, maxLength: 255},
    "password": { type: String, maxLength: 255},
    "phoneNumber": { type: String, maxLength: 255},
    "address": { type: String, maxLength: 255},
    "productsInCart": { type: Array},
    "Order": { type: Array},
    "curent": { type: Boolean},
    "createAt": { type: Date, default: Date.now },
    "updatedAt": { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', user)