const express = require('express');
const router = express.Router();

const staticsController = require('../controllers/staticsController');

router.get('/', staticsController.index);

router.get('/contacto', staticsController.contact);

router.get('/acerca-de', staticsController.about);

module.exports = router;