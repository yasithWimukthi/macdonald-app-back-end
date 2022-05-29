const router = require('express').Router();
const orderController = require('../controllers/order.controller');
const { AuthorizationMiddleware } = require("../middlewares/authorization.middleware");

router.get('/', orderController.get_all_orders);

router.post('/', AuthorizationMiddleware('admin'), orderController.create_order);

router.patch('/:orderId', AuthorizationMiddleware('admin'), orderController.update_order_status);

module.exports = router;