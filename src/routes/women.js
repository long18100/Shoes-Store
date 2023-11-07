const express = require('express')
const router = express.Router();

const womenController = require('../app/controllers/WomenController')

router.get('/:slug', womenController.show)
router.get('/women', womenController.index)

module.exports = router