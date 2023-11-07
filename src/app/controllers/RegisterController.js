const User = require('../models/user');
const { mongooseToObject } = require('../../util/mongoose')

class RegisterController {

    index(req, res) {
        res.render('login/register')
    }
    create(req, res, next) {
        const user = new User(req.body)
        user.save()
            .then(() => res.redirect(`/login`))
    }
};

module.exports = new RegisterController