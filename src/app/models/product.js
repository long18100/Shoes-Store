const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    "id": { type: Number},
    "name": { type: String},
    "image": { type: String},
    "price": { type: Number},
    "size": { type: Array},
    "type": { type: String},
    "newCL": { type: Boolean}, 
    "createAt": { type: Date, default: Date.now },
    "updatedAt": { type: Date, default: Date.now }
});

module.exports = mongoose.model('product', product)