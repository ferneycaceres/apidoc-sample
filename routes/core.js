var express = require('express');
var router = express.Router();



/**
   * @api {post} /core/legalentities/<uid>/certificates  Upload Digital Certificates
   * @apiDescription Upload Digital Certificates
   * @apiVersion 1.0.0
   * @apiName PostDigitalCert
   * @apiGroup CoreAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} certificate Certificate Data Encrypted.
   * @apiParam {String} passcode Passcode Encrypted.
   * 
   * @apiParamExample {json} Request Body Example:
   *     {
   *         "certificate":<certificate>,
   *         "passcode":<passcode>
   *     }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {assignment_id} assignment_id  Assignment id.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       'legalentity': 'B1q2hUEKmeVp9zWepx9cnp',
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
   *     curl -XPOST -d '{
   *            "certificate":<certificate>,
   *            "passcode":<passcode>
   *         }' 'https://kong.portalfinance.co/core/legalentities/<uid>/certificates
   */

/**
   @api {post} /core/supplier-onboardings Create LegalEntity 
   * @apiDescription Create User - UserProfile - Business Relation
   * @apiVersion 1.0.0
   * @apiName PostSupplierOnboardings
   * @apiGroup CoreAPI
   *
   * @apiPermission None
   * @apiParamExample {json} Request Body Example:
   *     {
   *     "user":{
   *         "email": "executive1@portalfinance.co",
   *         "password": "portalfinance",
   *         "password_confirmation": "portalfinance",
   *         "role_names": ["financial"]
   *     },
   *     "organization":{
   *         "tax_number": "764505832",
   *        "name": "Portal Finance SpA"
   *     },
   *     "user_profile": {
   *         "first_name": "Executive1",
   *         "last_name": "Executive1",
   *         "tax_number": "67808428",
   *         "job_title": "Engineer"
   *     }
   * }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {Object} User  User Object.
   * @apiSuccess {String} User.email  Email user.
   * @apiSuccess {String} User.password Password user.
   * @apiSuccess {String} User.password_confirmation Password Confirmation user.
   * @apiSuccess {Object[]} User.role_names Roles user.
   * @apiSuccess {Object} Organization Organization Object.
   * @apiSuccess {String} Organization.tax_number Tax Number Organization.
   * @apiSuccess {String} Organization.name Organization Name Organization.
   * @apiSuccess {Object} User_Profile   User Profile Object.
   * @apiSuccess {String} User_Profile.first_name First Name user.
   * @apiSuccess {String} User_Profile.last_name Last Name user.
   * @apiSuccess {String} User_Profile.tax_number Tax Number user.
   * @apiSuccess {String} User_Profile.job_title Job Title user.
   * 
   *
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       'legalEntity_id': 'B1q2hUEKmeVp9zWepx9cnp',
   *       'user_id': 'PXmRJVrtzFAHsxjs7voD5R'
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
   *     curl -XPOST -d '{
   *    "user":{
   *       "email": "executive1@portalfinance.co",
   *         "password": "portalfinance",
   *         "password_confirmation": "portalfinance",
   *         "role_names": ["financial"]
   *    },
   *     "organization":{
   *        "tax_number": "764505832",
   *         "name": "Portal Finance SpA"
   *     },
   *     "user_profile": {
   *         "first_name": "Executive1",
   *         "last_name": "Executive1",
   *         "tax_number": "67808428",
   *         "job_title": "Engineer"
   *    }' 'https://kong.portalfinance.co/core/supplier-onboardings'
   * 
   */

  /**
   * @api {post} /core/sign_in Sign In User 
   * @apiDescription Sign_in User
   * @apiVersion 1.0.0
   * @apiName PostSign_in
   * @apiGroup CoreAPI
   *
   * @apiPermission None
   * @apiParamExample {json} Request Body Example:
   *     {
   *         "email": "B1q2hUEKmeVp9zWepx9cnp",
   *         "password": "eVp9zWepx9="
   *     }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} User.email  Email user Encrypted.
   * @apiSuccess {String} User.password Password user Encrypted.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       'legalEntity_id': 'B1q2hUEKmeVp9zWepx9cnp',
   *       'user_id': 'PXmRJVrtzFAHsxjs7voD5R',
   *        "User":{
   *            ['DashboardView','InvoicesView','OffersView']
   *        }
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
   * 
   * @apiExample {curl} Example usage:
   *     curl -XPOST -d '{
   *    "user":{
   *         "email": "B1q2hUEKmeVp9zWepx9cnp",
   *         "password": "eVp9zWepx9=",
   *    }' 'https://kong.portalfinance.co/core/sign_in'
   */


   /**
   @api {get} /core/elegible-invoices Elegible invoices
   * @apiDescription Elegible invoices
   * 
   * -> GET elegibility criteria for financial
   * 
   * -> Create Filters
   * 
   * -> GET /documents/invoices?filters{}
   *
   * @apiVersion 1.0.0
   * @apiName GetSElegibleInvoices
   * @apiGroup CoreAPI
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {Number} id supplier unique ID who has invoices.
   * @apiParamExample {json} Request Body Example:
   *     {
   *       'uid': <supplier_uid>,
   *     }
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
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
   *          -d "{'uid' : 'i89qwurtgas78k5s'}" \
   *          -X POST https://kong.portalfinance.co/core/elegible-invoices
   */

    /**
   * @api {post} /core/offers/<uid> Create Offer 
   * @apiDescription Create Offer
   * @apiVersion 1.0.0
   * @apiName PostCreateOffer
   * @apiGroup CoreAPI
   *
   * @apiPermission None
   * 
   * @apiParam {Object} Invoices Invoices Array.
   * @apiParam {Number} price Price.
   * @apiParam {String} risk Risk.
   * 
   * @apiParamExample {json} Request Body Example:
   *     {
   *         "offer":{
   *                "invoices":<invoices_object>,
   *                "price":<price_offer>,
   *                "risk":<risk>
   *         }
   *     }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} User.email  Email user Encrypted.
   * @apiSuccess {String} User.password Password user Encrypted.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       'offer_id': 'B1q2hUEKmeVp9zWepx9cnp',
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
   *     curl -XPOST -d '{
   *    "offer":{
   *            "invoices":<invoices_object>,
   *            "price":<price_offer>,
   *            "risk":<risk>
   *         }' 'https://kong.portalfinance.co/core/offers/<uid>
   */

   /**
   * @api {post} /core/assignment-processes Create Assignment
   * @apiDescription Create Assignment
   * @apiVersion 1.0.0
   * @apiName PostCreateAssignment
   * @apiGroup CoreAPI
   *
   * @apiPermission None
   * 
   * @apiParam {Object} Invoices Invoices Array.
   * @apiParam {String} offer_id Offer id.
   * 
   * @apiParamExample {json} Request Body Example:
   *     {
   *         "offer":{
   *                  "offer_id":<offer_id>,
   *                  "invoices":<invoices_object>,
   *         }
   *     }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {assignment_id} assignment_id  Assignment id.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       'assignment_id': 'B1q2hUEKmeVp9zWepx9cnp',
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
   *
   * @apiExample {curl} Example usage:
   *     curl -XPOST -d '{
   *    "offer":{
   *            "invoices":<invoices_object>,
   *            "offer_id":<offer_id>,
   *         }' 'https://kong.portalfinance.co/core/assignment-processes
   */

   /**
   * @api {post} /core/assignment-processes Create Assignment
   * @apiDescription Get Assignment
   * @apiVersion 1.0.0
   * @apiName GetAssigments
   * @apiGroup CoreAPI
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * 
   * @apiSuccess {String} assignment_id Assigment Id
   * @apiSuccess {Object[]} Offer  Offer Array Object.
   * @apiSuccess {String} Offer.offer_id Offer id.
   * @apiSuccess {Object[]} Invoices  Invoices Array Object.
   * @apiSuccess {String} status_assignment  Status Assignment.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        "assignment_id":"EKmeVp9zW8qfgaswd8",
   *        "offer":{
   *            "offer_id":<offer_id>,
   *            "invoices":<invoices_object>,
   *        }
   *        "status_assignment":<status>
   *     }
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
   *          -d "{"assignment_id":"EKmeVp9zW8qfgaswd8",
   *              "offer":{
   *                "offer_id":<offer_id>,
   *                "invoices":<invoices_object>,
   *        }
   *        "status_assignment":<status>}" \
   *          -X POST https://kong.portalfinance.co/core/assignment-processes/<assignment_id>
   */
  



   


  router.post('/:id', function(req, res, next) {
    res.json({'id' : req.params.id,
              'firstName' : 'John',
              'lastName' : 'John'});
  });
  
  module.exports = router;