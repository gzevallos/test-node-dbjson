const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.index);

router.get('/create', productController.create);
router.post('/create', productController.store);
router.get('/detalle/:id', productController.show);
router.delete('/:id', productController.delete);
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);

module.exports = router;