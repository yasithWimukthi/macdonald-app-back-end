const router = require('express').Router();
const portionController = require('../controllers/portion.controller');
const { AuthorizationMiddleware } = require("../middlewares/authorization.middleware");

router.get('/', portionController.get_all_portions);

router.post('/', AuthorizationMiddleware('customer'), portionController.create_portion);

router.patch('/:portionId', AuthorizationMiddleware('customer'),portionController.update_portion);

router.delete('/:portionId', AuthorizationMiddleware('customer'),portionController.delete_portion);


/**
 * @swagger
 * /api/v1/portions:
 *  get:
 *    tags: 
 *      - portions
 *    responses: 
 *      '200': 
 *        content:
 *          'application/json': 
 *              schema: 
 *                $ref: '#/src/models/portion.model.js'
 *            
 *         
 */

module.exports = router;