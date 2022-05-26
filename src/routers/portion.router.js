const router = require('express').Router();
const portionController = require('../controllers/portion.controller');

router.post('/', portionController.create_portion);

router.get('/', portionController.get_all_portions);

router.patch('/:portionId', portionController.update_portion);

router.delete('/:portionId', portionController.delete_portion);

module.exports = router;