const express = require('express')
const router = express.Router();

const adminController = require('../app/controllers/AdminController')

router.get('/admin', adminController.index)
router.get('/:id/edit', adminController.edit)
router.put('/:id', adminController.update)
router.post('/add', adminController.add)
router.delete('/:id', adminController.delete)

module.exports = router