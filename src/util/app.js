const mongoose = require('mongoose');

module.exports = {
    sortProducts: (req, products) => {
        if (req.query.type === 'desc') {
            products = products.sort((a, b) => a.price - b.price);
        } else if (req.query.type === 'asc') {
            products = products.sort((a, b) => b.price - a.price);
        }
    }
}