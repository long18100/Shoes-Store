const express = require('express')
const router = express.Router();

const login = require('../app/controllers/LoginController')

router.get('/login', login.index)
router.post('/singin', login.signin)
module.exports = router