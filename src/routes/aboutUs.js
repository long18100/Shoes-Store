const express = require('express')
const router = express.Router();

const collectionContronller = require('../app/controllers/AboutUsContronller')

router.get('/aboutUs', collectionContronller.index)

module.exports = router