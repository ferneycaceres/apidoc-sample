var express = require('express');
var router = express.Router();

/**
 * @api {get} /api/v1/supplier/:id Request supplier information
 * @apiName Getsupplier
 * @apiGroup supplierAPI
 *
 * @apiParam {Number} id suppliers unique ID.
 * @apiPermission Authorized suppliers only
 *
 * @apiSuccess {Number} id Unique id of the supplier.
 * @apiSuccess {String} firstname Firstname of the supplier.
 * @apiSuccess {String} lastname  Lastname of the supplier.
 * @apiSuccess {Object} address  Address of the supplier.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       'id': 1234,
 *       'firstname': 'John',
 *       'lastname': 'Doe',
 *       'address': {'zipCode' : '00100'}
 *     }
 *
 * @apiError supplierNotFound 404 The id of the supplier was not found.
 * @apiError InvalidAuthentication 403 Authentication failed.
 *
 * @apiErrorExample supplierNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'error': 'supplierNotFound'
 *     }
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       'error': 'Authorization failed'
 *     }
 *
 * @apiExample {curl} Example usage:
 *     curl -i http://localhost:3000/api/v1/supplier/4711
 */
router.get('/:id', function(req, res, next) {
  res.json({'id' : req.params.id,
            'firstName' : 'John',
            'lastName' : 'John'});
});

/**
 * @api {post} /api/v1/supplier/:id Update supplier information
 * @apiName Updatesupplier
 * @apiGroup supplierAPI
 *
 * @apiParam {Number} id suppliers unique ID.
 * @apiParamExample {json} Request Body Example:
 *     {
 *       'firstname': 'John',
 *       'lastname': 'Doe',
 *       'address': {'zipCode' : '00100'}
 *     }
 * @apiHeader {String} Authorization Http basic auth.
 *
 * @apiSuccess {Number} id Unique id of the supplier.
 * @apiSuccess {String} firstname Firstname of the supplier.
 * @apiSuccess {String} lastname  Lastname of the supplier.
 * @apiSuccess {Object} address  Address of the supplier.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       'id': 1234,
 *       'firstname': 'John',
 *       'lastname': 'Doe',
 *       'address': {'zipCode' : '00100'}
 *     }
 *
 * @apiError supplierNotFound The id of the supplier was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       'error': 'supplierNotFound'
 *     }
 * @apiExample {curl} Example usage:
 *     curl -H "Content-Type: application/json" \
 *          -d "{'firstname' : 'John', 'lastname': 'Doe Foo'}" \
 *          -X POST http://localhost:3000/api/v1/supplier/1234
 */
router.post('/:id', function(req, res, next) {
  res.json({'id' : req.params.id,
            'firstName' : 'John',
            'lastName' : 'John'});
});

module.exports = router;
