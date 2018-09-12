var express = require('express');
var router = express.Router();

 /**
   @api {get} /offers/?status=<status>&page_number=<integer>&page_limit=<integer>&search=<string>&sort_by=<string>&type=<string> [Financial] List of pending offers postulated by suppliers

   * @apiDescription Get List of pending offers postulated by suppliers
   * @apiVersion 1.0.0
   * @apiName GETOffersPendingOffers
   * @apiGroup OffersFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} status like PENDING,ACCEPTED,REJECTED,PROPOSED.
   * @apiParam {String} page_number Current page.
   * @apiParam {String} page_limit Number of element to show in the current view.
   * @apiParam {String} search Search by keywords.
   * @apiParam {String} sort_by Sort by Column.
   * @apiParam {String} type_sort Type Sort (DES or ASC).
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object[]} offers Offers Array Object.
   * @apiSuccess {String} offers.offer_id Offer Id.
   * @apiSuccess {String} offers.offer_num Offer Number.
   * @apiSuccess {String} offers.offer_amount Offer amount.
   * @apiSuccess {String} offers.supplier_name Supplier name.
   * @apiSuccess {String} offers.supplier_tin Supplier Tax number.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *      "offers":[
   *      {
   *        "offer_id":<string>,
   *        "offer_num":<string>,
   *        "supplier_tin":<string>,
   *        "supplier_name":<string>
   *        "offer_amount":<string>
   *      }
   *      ]
   * }
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
   *          -X GET https://kong.portalfinance.co/offers/?status=<status>&page_number=<integer>&page_limit=<integer>&search=<string>&sort_by=<string>&type=<string>
   */

   /**
   @api {get} /offers/<offer_id> [Financial] Offer details

   * @apiDescription Get Offer details
   * @apiVersion 1.0.0
   * @apiName GETOfferDetails
   * @apiGroup OffersFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} offer_id Offer id.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object[]} offers Offers Array Object.
   * @apiSuccess {String} offers.offer_id Offer Id.
   * @apiSuccess {String} offers.offer_num Offer Number.
   * @apiSuccess {String} offers.offer_amount Offer amount.
   * @apiSuccess {String} offers.supplier_name Supplier name.
   * @apiSuccess {String} offers.supplier_tin Supplier Tax number.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *      "offer":
   *      {
   *        "offer_id":<string>,
   *        "offer_num":<string>,
   *        "offer_amount":<string>,
   *        "num_invoices":<number>,
   *        "issue_date":<date>,
   *        "due_date":<date>,
   *        "fixed_commission":<number>,
   *        "variable_commission":<number>,
   *        "transaction_expenses":<number>
   *      },
   *      "invoices":[
   *      {
   *        "invoice_id":<string>,
   *        "invoice_num":<string>,
   *        "invoice_amount":<number>,
   *        "issue_date":<date>,
   *        "due_date":<date>,
   *        "debtor_name":<string>,
   *        "debtor_tin":<string>
   *      }
   *      ],
   *      "supplier":{
   *        "supplier_id":<string>,
   *        "supplier_name":<string>,
   *        "supplier_tin":<string>
   *      }
   *      
   * }
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
   *          -X GET https://kong.portalfinance.co/offers/<offer_id>
   */

   /**
   @api {put} /offers/<offer_id>/accept [Financial] Accept offer postulated by supplier

   * @apiDescription Post Accept offer postulated by supplier
   * @apiVersion 1.0.0
   * @apiName PUTAcceptOffer
   * @apiGroup OffersFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} offer_id Offer id.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object[]} offers Offers Array Object.
   * @apiSuccess {String} offers.offer_id Offer Id.
   * @apiSuccess {String} offers.offer_num Offer Number.
   * @apiSuccess {String} offers.offer_amount Offer amount.
   * @apiSuccess {String} offers.supplier_name Supplier name.
   * @apiSuccess {String} offers.supplier_tin Supplier Tax number.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *      "offer":
   *      {
   *        "offer_id":<string>,
   *        "offer_num":<string>,
   *        "offer_amount":<string>,
   *        "num_invoices":<number>,
   *        "issue_date":<date>,
   *        "due_date":<date>,
   *        "fixed_commission":<number>,
   *        "variable_commission":<number>,
   *        "transaction_expenses":<number>
   *      },
   *      "invoices":[
   *      {
   *        "invoice_id":<string>,
   *        "invoice_num":<string>,
   *        "invoice_amount":<number>,
   *        "issue_date":<date>,
   *        "due_date":<date>,
   *        "debtor_name":<string>,
   *        "debtor_tin":<string>
   *      }
   *      ],
   *      "supplier":{
   *        "supplier_id":<string>,
   *        "supplier_name":<string>,
   *        "supplier_tin":<string>
   *      }
   *      
   * }
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
   *          -X POST https://kong.portalfinance.co/offers/<offer_id>/accept
   */

  /**
   @api {put} /offers/<offer_id>/reject [Financial] Reject offer postulated by supplier

   * @apiDescription Post Accept offer postulated by supplier
   * @apiVersion 1.0.0
   * @apiName PUTRejectOffer
   * @apiGroup OffersFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} offer_id Offer id.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object[]} offers Offers Array Object.
   * @apiSuccess {String} offers.offer_id Offer Id.
   * @apiSuccess {String} offers.offer_num Offer Number.
   * @apiSuccess {String} offers.offer_amount Offer amount.
   * @apiSuccess {String} offers.supplier_name Supplier name.
   * @apiSuccess {String} offers.supplier_tin Supplier Tax number.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *      "offer":
   *      {
   *        "offer_id":<string>,
   *        "offer_num":<string>,
   *        "offer_amount":<string>,
   *        "num_invoices":<number>,
   *        "issue_date":<date>,
   *        "due_date":<date>,
   *        "fixed_commission":<number>,
   *        "variable_commission":<number>,
   *        "transaction_expenses":<number>
   *      },
   *      "invoices":[
   *      {
   *        "invoice_id":<string>,
   *        "invoice_num":<string>,
   *        "invoice_amount":<number>,
   *        "issue_date":<date>,
   *        "due_date":<date>,
   *        "debtor_name":<string>,
   *        "debtor_tin":<string>
   *      }
   *      ],
   *      "supplier":{
   *        "supplier_id":<string>,
   *        "supplier_name":<string>,
   *        "supplier_tin":<string>
   *      }
   *      
   * }
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
   *          -X POST https://kong.portalfinance.co/offers/<offer_id>/Reject
   */


 /**
   @api {get} /suppliers/ [Financial] List of suppliers

   * @apiDescription Get List of suppliers
   * @apiVersion 1.0.0
   * @apiName GETSuppliers
   * @apiGroup OffersFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   *  @apiParam {String} offer_id Offer id.
   * 
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object[]} suppliers Suppliers Array Object.
   * @apiSuccess {String} suppliers.supplier_id Supplier Id.
   * @apiSuccess {String} suppliers.supplier_name Supplier Name.
   * @apiSuccess {String} suppliers.supplier_tin Supplier Tax number.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *     "suppliers":[
   *      {
   *        "supplier_id":<string>,
   *        "supplier_name":<string>,
   *        "supplier_tin":<string>
   *      }
   *      ]
   *      
   * }
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
   *          -X GET https://kong.portalfinance.co/suppliers/
   */

   /**
   @api {get} /suppliers/<supplier_id> [Financial] Supplier details

   * @apiDescription Get Supplier details
   * @apiVersion 1.0.0
   * @apiName GETSupplierDetails
   * @apiGroup OffersFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object} dashboard Dashboard Object (not defined yet).
   * @apiSuccess {Object} supplier Suppler Object.
   * @apiSuccess {String} supplier.supplier_id Suppler Id.
   * @apiSuccess {String} supplier.supplier_name Suppler Name.
   * @apiSuccess {String} supplier.supplier_tin Suppler Tax number.
   * @apiSuccess {String} supplier.supplier_city Suppler city.
   * @apiSuccess {String} supplier.supplier_country Suppler Country.
   * @apiSuccess {String} supplier.supplier_phone Suppler Phone Number.
   * @apiSuccess {Object} ok2pay_group OK2pay Group Object.
   * @apiSuccess {String} ok2pay_group.group_id Ok2pay Group id.
   * @apiSuccess {String} ok2pay_group.group_name Ok2pay Group_name.
   * @apiSuccess {Object} ok2pay_group.tasks Ok2pay group tasks.
   * @apiSuccess {String} ok2pay_group.tasks.task_id Ok2pay group tasks id.
   * @apiSuccess {String} ok2pay_group.tasks.task_name Ok2pay group tasks name.
   * @apiSuccess {Boolean} ok2pay_group.tasks.task_value Ok2pay group tasks value.
   * @apiSuccess {Object} ok2pay_group.executives Ok2pay group executives.
   * @apiSuccess {String} ok2pay_group.executives.executive_name Ok2pay group executive name.
   * @apiSuccess {Object} metadata Metadata Group Object.
   * @apiSuccess {Number} metadata.average_margin Average Margin.
   * @apiSuccess {Number} metadata.last_year_sales Last year sales.
   * @apiSuccess {Number} metadata.last_year_buys Last year Buys.
   * @apiSuccess {Number} metadata.last_year_accumulative_margin Last year accumulative margin.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *     "dashboard":{},
   *     "supplier":{
   *        "supplier_id":<string>,
   *        "supplier_name":<string>,
   *        "supplier_tin":<string>,
   *        "supplier_city":<string>,
   *        "supplier_country":<string>,
   *        "supplier_phone":<string>
   *     },
   *     "ok2pay_group":{
   *       "group_id":<string>,
   *       "group_name:<string>,
   *       "tasks":[
   *       {
   *        "task_id":<string>,
   *        "task_name":<string>,
   *        "task_value":<boolean>
   *       }
   *       ],
   *       "executives":[
   *        {
   *           "executive_name":<string>
   *        }
   *       ]
   *     },
   *    "metadata":{
   *        "average_margin":<number>,
   *        "last_year_sales":<number>,
   *        "last_year_buys":<number>,
   *        "last_year_accumulative_margin":<number>
   *    }
   * }
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
   *          -X GET https://kong.portalfinance.co/suppliers/<supplier_id>
   */

    /**
   @api {get} /elegible-invoices/<supplier_tin> [Financial] Elegible invoices by supplier

   * @apiDescription Get Elegible invoices by supplier
   * @apiVersion 1.0.0
   * @apiName GETSupplierDetails
   * @apiGroup OffersFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object} invoices Invoices Object.
   * @apiSuccess {String} invoices.invoice_id Invoice id.
   * @apiSuccess {String} invoices.invoice_num Invoice num.
   * @apiSuccess {Date} invoices.issue_date Invoice issue date.
   * @apiSuccess {Date} invoices.due_data Invoice due date.
   * @apiSuccess {Number} invoices.amount Invoice amount.
   * @apiSuccess {Number} default_fixed_commission Default Fixed Commission.
   * @apiSuccess {Number} default_variable_commission Default Variable Commission.
   * @apiSuccess {Number} default_transaction_expenses Default Transaction Expenses.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *     "invoices":[
   *     {
   *        "invoice_id":<string>,
   *        "invoice_num":<string>,
   *        "issue_date":<date>,
   *        "due_data":<date>,
   *        "amount":<number>,
   *     },
   *     "default_fixed_commission":<number>,
   *     "default_variable_commission":<number>,
   *     "default_transaction_expenses":<number>
   *     ]
   * }
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
   *          -X GET https://kong.portalfinance.co/elegible-invoices/<supplier_tin>
   */


   /**
   @api {post} /postulate-invoices/ [Financial] Postulate invoices by financial

   * @apiDescription Get Postulate invoices by financial
   * @apiVersion 1.0.0
   * @apiName GETPostulateInvoices
   * @apiGroup OffersFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiParam {Object} offer offer Object.
   * @apiParam {String} offer.fixed_commission Fixed Commission.
   * @apiParam {String} offer.variable_commission Fixed Commission.
   * @apiParam {String} offer.transaction_expenses Fixed Commission.
   * @apiParam {Object[]} invoices Invoices Array Object.
   * @apiParam {String} invoices.invoice_id Invoice id.
   * @apiParam {Number} invoices.due_days Due days.
   * 
   * @apiParamExample {json} Request Body Example:
   * HTTP/1.1 200 OK
   * {
   *     "offer":
   *     {
   *        "fixed_commission":<number>,
   *        "variable_commission":<number>,
   *        "transaction_expenses":<number>,
   *     },
   *     "invoices":[
   *     {
   *        "invoice_id":<string>,
   *        "due_days":<number>
   *     }
   *     ]
   * }
   * 
   * @apiSuccess {Object} offer offer Object.
   * @apiSuccess {String} offer.id Offer id.
   * @apiSuccess {String} offer.fixed_commission Fixed Commission.
   * @apiSuccess {String} offer.variable_commission Fixed Commission.
   * @apiSuccess {String} offer.transaction_expenses Fixed Commission.
   * @apiSuccess {Object[]} invoices Invoices Array Object.
   * @apiSuccess {String} invoices.invoice_id Invoice id.
   * @apiSuccess {Number} invoices.due_days Due days.
   *  
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *     "offer":
   *     {
   *        "offer_id":<string>,
   *        "fixed_commission":<number>,
   *        "variable_commission":<number>,
   *        "transaction_expenses":<number>,
   *     },
   *     "invoices":[
   *     {
   *        "invoice_id":<string>,
   *        "due_days":<number>
   *     }
   *     ]
   * }
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
   *          -X POST https://kong.portalfinance.co/postulate-invoices/
   */

   