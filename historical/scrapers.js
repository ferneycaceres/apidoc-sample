var express = require('express');
var router = express.Router();


/**
   @api {get} /scrapers/financial/:uid/billers Billers by Financial
   * @apiDescription Billers by Financial
   * @apiVersion 1.0.0
   * @apiName GetBillers
   * @apiGroup ScrapersAPI
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiHeaderExample {json} Request-Example:
                 { "Content-Type": "application/json",
                   "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
                 }
   *
   * @apiSuccess {Object[]} Accounts  Accounts Array Object.
   * @apiSuccess {String} Accounts.uid Account id.
   * @apiSuccess {String} Accounts.account_name Account Name.
   * @apiSuccess {Boolean} Accounts.selected Account Selected.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       accounts: [
   *        {
   *            'uid':'meVp9zWepx9',
   *            'provider_code':'SII',
   *            'selected':true
   *        },
   *        {
   *            'uid':'B1q2hUWe897',
   *            'provider_code':'Other',
   *            'selected':false
   *        }
   *        ]
   *     }
   *
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 4xx Any Error
   *     {
   *         "errors":[
   *            {
   *                 "field":"<field_with_error>",
   *                 "code":"<error_code>",
   *                 "description":"<description>",
   *            }
   *        ]
   *   }
   * @apiExample {curl} Example usage:
   *     curl -i http://kong.portalfinance.co/scrapers/financial/:uid/billers
   */

   /**
   @api {get} /scrapers/financial/:financial_uid/legalentities/:account_uid/accounts Accounts by LegalEntity
   * @apiDescription Scrapers Accounts
   * @apiVersion 1.0.0
   * @apiName GetScraperAccount
   * @apiGroup ScrapersAPI
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiHeaderExample {json} Request-Example:
                 { "Content-Type": "application/json",
                   "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
                 }
   *
   * @apiSuccess {Object[]} Accounts  Accounts Array Object.
   * @apiSuccess {String} Accounts.uid Account id.
   * @apiSuccess {String} Accounts.account_name Account Name.
   * @apiSuccess {Boolean} Accounts.selected Account Selected.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       accounts: [
   *        {
   *            'uid':'meVp9zWepx9',
   *            'provider_code':'SII',
   *            'selected':true
   *        },
   *        {
   *            'uid':'B1q2hUWe897',
   *            'provider_code':'Other',
   *            'selected':false
   *        }
   *        ]
   *     }
   *
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 4xx Any Error
   *     {
   *         "errors":[
   *            {
   *                 "field":"<field_with_error>",
   *                 "code":"<error_code>",
   *                 "description":"<description>",
   *            }
   *        ]
   *   }
   * @apiExample {curl} Example usage:
   *     curl -i http://kong.portalfinance.co/scrapers/financial/:financial_uid/legalentities/:account_uid/accounts
   */


/**
   * @api {post} /scrapers/financial/:financial_uid/legalentities/:account_uid/accounts Validate Biller Account 
   * @apiDescription Validate biller account and start scrapers download
   * @apiVersion 1.0.0
   * @apiName PostScraperAccount
   * @apiGroup ScrapersAPI
   *
   * @apiPermission None
   * @apiParamExample {json} Request Body Example:
   *     {
   *        "authorized_user": {
   *             "username": "9iodsqweopiw",
   *             "password": "q2hUEOPsa8s",
   *             "organization_tax_number": "764505832",
   *             "user_tax_number": "157753258",
   *             "provider_code": "PVR",
   *             "owner_type": "User"
   *     }
   * }

   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiParam {Object[]} Authorized_User Authorized User Object.
   * @apiParam {String} Authorized_User.username Username Encrypted.
   * @apiParam {String} Authorized_User.password Password Encrypted.
   * @apiParam {String} Authorized_User.organization_tax_number Organization Tax Number.
   * @apiParam {String} Authorized_User.user_tax_number User Tax number.
   * @apiParam {String} Authorized_User.provider_code Provider Code.
   * @apiParam {String} Authorized_User.owner_type Owner Type.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     'accounts':{
   *     {
   *         'account_uid':'<id_account>'
   *         'owner_type':'Organization',
   *         'provider_code':'SII',
   *         'organization_tax_number':'764505832',
   *         'created':true
   *     }
   * @apiSuccess {Object[]} Accounts  Account Object.
   * @apiSuccess {String} Accounts.owner_type Owner Type.
   * @apiSuccess {String} Accounts.provider_code Provider Code.
   * @apiSuccess {String} Accounts.organization_tax_number Organization Tax Number.
   * @apiSuccess {String} Accounts.created Account created.
   *
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 4xx Any Error
   *     {
   *         "errors":[
   *            {
   *                 "field":"<field_with_error>",
   *                 "code":"<error_code>",
   *                 "description":"<description>",
   *            }
   *        ]
   *   }

   * @apiExample {curl} Example usage:
   *     curl -XPOST -d '{
   *    'accounts':{
   *     {
   *         'account_uid':'<id_account>'
   *         'owner_type':'Organization',
   *         'provider_code':'SII',
   *         'organization_tax_number':'764505832',
   *         'created':true
   *     }' 'https://kong.portalfinance.co/scrapers/financial/:financial_uid/legalentities/:account_uid/accounts'
   */

   /**
   * @api {post} /scrapers/requests/  Request Start Download Scrapers
   * @apiDescription Start download Scrapers
   * @apiVersion 1.0.0
   * @apiName PostRequestScrapers
   * @apiGroup ScrapersAPI
   *
   * @apiPermission None
   * @apiParamExample {json} Request Body Example:
   *     {
   *        "account_id": "<account_id>"
   *     }

   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiParam {Object[]} Authorized_User Authorized User Object.
   * @apiParam {String} Authorized_User.username Username Encrypted.
   * @apiParam {String} Authorized_User.password Password Encrypted.
   * @apiParam {String} Authorized_User.organization_tax_number Organization Tax Number.
   * @apiParam {String} Authorized_User.user_tax_number User Tax number.
   * @apiParam {String} Authorized_User.provider_code Provider Code.
   * @apiParam {String} Authorized_User.owner_type Owner Type.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     'accounts':{
   *     {
   *         'account_uid':'<id_account>'
   *         'owner_type':'Organization',
   *         'provider_code':'SII',
   *         'organization_tax_number':'764505832',
   *         'created':true
   *     }
   * @apiSuccess {Object[]} Accounts  Account Object.
   * @apiSuccess {String} Accounts.owner_type Owner Type.
   * @apiSuccess {String} Accounts.provider_code Provider Code.
   * @apiSuccess {String} Accounts.organization_tax_number Organization Tax Number.
   * @apiSuccess {String} Accounts.created Account created.
   *
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 4xx Any Error
   *     {
   *         "errors":[
   *            {
   *                 "field":"<field_with_error>",
   *                 "code":"<error_code>",
   *                 "description":"<description>",
   *            }
   *        ]
   *   }

   * @apiExample {curl} Example usage:
   *     curl -XPOST -d '{
   *         'account_uid':'<id_account>'
   *     }' 'https://kong.portalfinance.co/scrapers/requests/'
*/


  router.post('/:id', function(req, res, next) {
    res.json({'id' : req.params.id,
              'firstName' : 'John',
              'lastName' : 'John'});
  });
  
  module.exports = router;