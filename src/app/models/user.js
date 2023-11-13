const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    "id": { type: Number },
    "name": { type: String, maxLength: 255 },
    "username": { type: String, maxLength: 255 },
    "password": { type: String, maxLength: 255 },
    "phoneNumber": { type: String, maxLength: 255 },
    "address": { type: String, maxLength: 255 },
    "productsInCart": [{
        "name": { type: String },
        "image": { type: String },
        "price": { type: Number },
        "size": { type: Array },
        "type": { type: String },
        "quantity": { type: Number, default:1},
        "newCL": { type: Boolean },
        "createAt": { type: Date, default: Date.now },
        "updatedAt": { type: Date, default: Date.now }
    }],
    "Order": [{
        "name": { type: String },
        "image": { type: String },
        "price": { type: Number },
        "size": { type: Array },
        "type": { type: String },
        "quantity": { type: Number},
        "newCL": { type: Boolean },
        "createAt": { type: Date },
        "updatedAt": { type: Date }
    }],
    "curent": { type: Boolean },
    "createAt": { type: Date, default: Date.now },
    "updatedAt": { type: Date, default: Date.now }
});

module.exports = mongoose.model('user', user)