const User = require('../models/user');
const { mongooseToObject } = require('../../util/mongoose')
const express = require('express')

class LoginController {

    index(req, res) {
        res.render('login/login')
    }


    async singin(req, res, next) {

        let curentUser;
        if (req.body.username == 'admin' && req.body.password == 'admin') {
            res.redirect(`/admin`)
        }
        try {
            curentUser = await User.findOne({ username: req.body.username, password: req.body.password }).lean();
            //const user = new CurentUser(curentUser)
            User.findOne({ username: req.body.username, password: req.body.password }).then((user) => {
                if(user){
                    User.updateMany({}, { $set: { curent: false } }).then(() =>{
                        User.updateOne({ username: req.body.username, password: req.body.password }, { $set: { curent: true } })
                            .then(() => {
                                res.redirect(`/`)
                            })
                            .catch(() => {
                                User.updateOne({ username: defaut}, { $set: { curent: true } })
                            })
                    })
                }else{
                    res.redirect(`/login`)
                }
            }).catch(() => {
                
            })

            //res.json(curentUser)
        } catch (error) {
            next(error);
        }
    }

};

module.exports = new LoginController