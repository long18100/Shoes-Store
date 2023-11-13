const express = require('express')
const router = express.Router();

const infoController = require('../app/controllers/InfoController')

router.get('/info', infoController.index)
router.get('/:_id', infoController.cancel)
router.put('/:id', infoController.edit)
module.exports = router