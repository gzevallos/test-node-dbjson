const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.index);

router.get('/create', productController.create);
router.post('/', productController.store);
router.get('/detalle/:id', productController.show);
router.delete('/:id', productController.delete);

module.exports = router;