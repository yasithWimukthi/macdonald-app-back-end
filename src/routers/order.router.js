const router = require('express').Router();
const orderController = require('../controllers/order.controller');

router.get('/', orderController.get_all_orders);

router.post('/', orderController.create_order);


module.exports = router;