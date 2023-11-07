const express = require('express')
const router = express.Router();

const menController = require('../app/controllers/MenControoller')

router.get('/:slug', menController.show)
router.get('/men', menController.index)

module.exports = router