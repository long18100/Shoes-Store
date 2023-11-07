const express = require('express')
const router = express.Router();

const login = require('../app/controllers/LoginController')

//router.get('/:slug', login.show)
router.get('/login', login.index)
router.post('/singin', login.singin)
module.exports = router