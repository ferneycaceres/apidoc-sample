var express = require('express');
var router = express.Router();

/**
   @api {get} /riskengine/offer-assessments Get Offer Assessments

   * @apiDescription Get Offer Assessments
   * @apiVersion 1.0.0
   * @apiName GET
   * @apiGroup RiskEngineAPI
   *
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {Object[]} Invoices  Invoices Array Object.
   * @apiParam {String} Invoices.uid Invoices id.
   * @apiParam {String} Invoices.issuer_id Issuer id.
   * @apiParam {String} Invoices.issuer_tax_number Issuer Tax Number.
   * @apiParam {String} Invoices.issuer_name Issuer Name.
   * @apiParam {String} Invoices.debtor_id Debtor Tax Number.
   * @apiParam {String} Invoices.debtor_tax_number Debtor Tax Number.
   * @apiParam {String} Invoices.invoice_number Invoice Number.
   * @apiParam {Date} Invoices.issue_date Issue Date .
   * @apiParam {Number} Invoices.amount_total Amount Total.
   * @apiParam {String} Invoices.country_code Country Code.
   * @apiParam {Date} Invoices.currency_code Currency Code.
   * @apiParam {Date} Invoices.dte_type DTE Type.
   * @apiParam {Date} Invoices.dte DTE.
   * 
   * @apiParamExample {json} Request Body Example:
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
   * @apiHeaderExample {json} Request-Example:
                 { "Content-Type": "application/json",
                   "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
                 }
   *
   * @apiSuccess {String} score  Score Risk Assessment.
   * @apiSuccess {Number} price  Price Risk Assessment.
   * @apiSuccess {String} currency_code Currency Code.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *    {
   *        'score':'AAA',
   *        'price':508983,
   *        'currency_code':'CLP'
   *    }
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
   *          -d "{<invoices_object>}" \
   *          -X POST https://kong.portalfinance.co/riskengine/offer-assessments
   */
  router.post('/:id', function(req, res, next) {
    res.json({'id' : req.params.id,
              'firstName' : 'John',
              'lastName' : 'John'});
  });
  
  module.exports = router;