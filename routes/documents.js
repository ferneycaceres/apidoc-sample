var express = require('express');
var router = express.Router();

/**
   @api {get} /documents/invoices Get Invoices 

   * @apiDescription Get Invoices
   * @apiVersion 1.0.0
   * @apiName GET
   * @apiGroup DocumentsAPI
   *
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} uid supplier unique ID who has invoices.
   * @apiParam {String} page Page.
   * @apiParam {Object} Filter Filters Object.
   * @apiParam {String} Filter.last_invoices Last Invoices.
   * @apiParam {Object} Filter.debtor Debtor uid.
   * @apiParam {Object} Filter.issuer Issuer uid.
   * @apiParam {Object} Filter.owner Owner uid.
   * 
   * @apiParamExample {json} Request Body Example:
   *     {
   *       'uid': <supplier_uid>,
   *       'page':1,
   *       'filters':{
   *            'last_invoices':'3',
   *            'debtor':<uid_debtor>,
   *            'issuer':<uid_issuer>,
   *            'owner':<uid_owner>
   *        }
   *     }
   * 
   * @apiHeaderExample {json} Request-Example:
                 { "Content-Type": "application/json",
                   "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
                 }
   *
   * @apiSuccess {Object[]} Invoices  Invoices Array Object.
   * @apiSuccess {String} Invoices.uid Invoices id.
   * @apiSuccess {String} Invoices.issuer_id Issuer id.
   * @apiSuccess {String} Invoices.issuer_tax_number Issuer Tax Number.
   * @apiSuccess {String} Invoices.issuer_name Issuer Name.
   * @apiSuccess {String} Invoices.debtor_id Debtor Tax Number.
   * @apiSuccess {String} Invoices.debtor_tax_number Debtor Tax Number.
   * @apiSuccess {String} Invoices.invoice_number Invoice Number.
   * @apiSuccess {Date} Invoices.issue_date Issue Date .
   * @apiSuccess {Number} Invoices.amount_total Amount Total.
   * @apiSuccess {String} Invoices.country_code Country Code.
   * @apiSuccess {Date} Invoices.currency_code Currency Code.
   * @apiSuccess {Date} Invoices.dte_type DTE Type.
   * @apiSuccess {Date} Invoices.dte DTE.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *      {  
   *         "id":"b56eb1c2-c3c1-4759-bb89-fde318df3ab5",
   *         "issuer_id":"5c126889-14f6-40bd-ba45-3bc86672b7ef",
   *         "issuer_tax_number":"764505832",
   *         "issuer_name":"Portal Finance SPA",
   *         "debtor_id":"a5f8b094-4862-4ce6-8cfe-9899f4cfeded",
   *         "debtor_tax_number":"482051170",
   *         "debtor_name":"DIEGO CAICEDO MOSQUERA",
   *         "invoice_number":"333",
   *         "issue_date":"2018-05-03T12:00:00.000Z",
   *         "due_date":null,
   *         "amount_total":5.0,
   *         "country_code":"CL",
   *         "currency_code":"CLP",
   *         "status":"idle",
   *         "dte_type":"34",
   *         "dte":<dte_doc>    
   *     }
   *    ]
   *
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
   *    curl -H "Content-Type: application/json" \
   *          -d "{'uid' : 'i89qwurtgas78k5s','page':'1','filter':{'last_invoices':'3','debtor':<uid>,'issuer':<uid>,'owner':<uid>}}" \
   *          -X POST https://kong.portalfinance.co/documents/invoices
   */

   
  router.post('/:id', function(req, res, next) {
    res.json({'id' : req.params.id,
              'firstName' : 'John',
              'lastName' : 'John'});
  });
  
  module.exports = router;