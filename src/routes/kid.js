const express = require('express')
const router = express.Router();

const kidController = require('../app/controllers/KidController')

router.get('/:slug', kidController.show)
router.get('/kid', kidController.index)

module.exports = router