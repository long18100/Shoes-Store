const Product = require('../models/product')
const User = require('../models/user')
const { mongooseToObject } = require('../../util/mongoose')

class InfoController {

    index(req, res) {
        res.render('info')
    }
    edit(req, res) {
        User.updateOne({ _id: req.params.id}, req.body)
        .then(() => res.redirect(`/info`))
    }
};

module.exports = new InfoController