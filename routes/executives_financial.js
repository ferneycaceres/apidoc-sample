var express = require('express');
var router = express.Router();

/**
   * @api {get} /executives/ Retrieve List of Financial Executives 
   * @apiDescription Retrieve List of Financial Executives 
   * @apiVersion 1.0.0
   * @apiName GetFinancialExecutives
   * @apiGroup ExecutivesFinancialAPI
   *
   * @apiPermission None
   * 
   * 
   * @apiSuccess {String} executive_id Executive Id.
   * @apiSuccess {String} executive_name Executive Name.
   * @apiSuccess {String} executive_document_num Executive Document .
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     [
   *        {
   *           "executive_id":<string>,
   *           "executive_name":<string>,
   *           "executive_document_num":<string>,
   *        }
   *    ]
   *
   * @apiErrorExample Error-Response:
   *  HTTP/1.1 4xx Any Error
   *     {
   *         "type": <URI_REFERENCE_THAT_IDENTIFIES_THE_TYPE_OF_PROBLEM>,
   *         "title": <HUMAN_READABLE_SUMMARY_OF_THE_PROBLEM>,
   *         "code":<HTTP_CODE>
   *         "invalid-params": [ 
   *                    {
   *                      "name": <FIELD_ERROR>,
   *                      "reason": <REASON_OF_ERROR>
   *                    },
   *                    {
   *                      "name": <FIELD_ERROR>,
   *                      "reason": <REASON_OF_ERROR>
   *                    }
   *                  ]
   *     }
   * 
   * @apiExample {curl} Example usage:
   *     curl -XGET -d '{
   *    }' 'https://kong.portalfinance.co/executives/'
   */

   /**
   * @api {get} /executives/<executive_id> Retrieve Financial Executive Detail
   * @apiDescription Retrieve Financial Executive Detail
   * @apiVersion 1.0.0
   * @apiName GetExecutiveDetail
   * @apiGroup ExecutivesFinancialAPI
   *
   * @apiPermission None
   * 
   * 
   * @apiSuccess {Object} executive Executive Object.
   * @apiSuccess {String} executive.id Executive Id.
   * @apiSuccess {String} executive.firstname Executive First Name.
   * @apiSuccess {String} executive.lastname Executive First Name.
   * @apiSuccess {String} executive.document_num Executive Document Number.
   * @apiSuccess {String} executive.branch Branch.
   * @apiSuccess {String} executive.email Executive Email.
   * @apiSuccess {String} executive.phone Executive Phone.
   * @apiSuccess {Object} office Office Object.
   * @apiSuccess {String} office.id Office id.
   * @apiSuccess {String} office.name Office name.
   * @apiSuccess {String} office.webpage Office Webpage.
   * @apiSuccess {String} office.city Office City.
   * @apiSuccess {String} office.country Office Country.
   * @apiSuccess {String} office.address Office Address.
   * @apiSuccess {String} office.phone Office Phone.
   * @apiSuccess {Object} executive_metadata Metadata Object.
   * @apiSuccess {Object} executive_roles Roles Object.
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *          "executive":{
   *                "id":<string>,
   *                "firstname":<string>,
   *                "lastname":<string>,
   *                "document_num":<string>,
   *                "branch":<string>,
   *                "email":<string>,
   *                "phone":<string>
   *           },
   *           "office":{
   *               "id":<string>,
   *               "name":<string>,
   *               "webpage":<string>,
   *               "city":<string>,
   *               "country":<string>,
   *               "address":<string>,
   *               "phone":<string>
   *           },
   *           "executive_metadata":[],
   *           "executive_roles":[]
   *     }
   *
   * @apiErrorExample Error-Response:
   *  HTTP/1.1 4xx Any Error
   *     {
   *         "type": <URI_REFERENCE_THAT_IDENTIFIES_THE_TYPE_OF_PROBLEM>,
   *         "title": <HUMAN_READABLE_SUMMARY_OF_THE_PROBLEM>,
   *         "code":<HTTP_CODE>
   *         "invalid-params": [ 
   *                    {
   *                      "name": <FIELD_ERROR>,
   *                      "reason": <REASON_OF_ERROR>
   *                    },
   *                    {
   *                      "name": <FIELD_ERROR>,
   *                      "reason": <REASON_OF_ERROR>
   *                    }
   *                  ]
   *     }
   * 
   * @apiExample {curl} Example usage:
   *     curl -XGET -d '{
   *    }' 'https://kong.portalfinance.co/executives/<executive_id>'
   */

   /**
   * @api {put} /executives/<executive_id> Update Financial Executive
   * @apiDescription Update Financial Executive 
   * @apiVersion 1.0.0
   * @apiName Get
   * @apiGroup ExecutivesFinancialAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} executive_id Executive id.
   * 
   * 
   * @apiParam {Object} executive Executive Object.
   * @apiParam {String} executive.firstname Executive First Name.
   * @apiParam {String} executive.lastname Executive First Name.
   * @apiParam {String} executive.document_num Executive Document Number.
   * @apiParam {String} executive.branch Branch.
   * @apiParam {String} executive.email Executive Email.
   * @apiParam {String} executive.phone Executive Phone.
   * @apiParam {Object} office Office Object.
   * @apiParam {String} office.id Office id.
   * @apiParam {String} office.name Office name.
   * @apiParam {String} office.webpage Office Webpage.
   * @apiParam {String} office.city Office City.
   * @apiParam {String} office.country Office Country.
   * @apiParam {String} office.address Office Address.
   * @apiParam {String} office.phone Office Phone.
   * @apiParam {Object} executive_metadata Metadata Object.
   * @apiParam {Object} executive_roles Roles Object.
   * 
   *
   * @apiParamExample {json} Request Body Example:
   *     HTTP/1.1 200 OK
   *     {
   *          "executive":{
   *                "firstname":<string>,
   *                "lastname":<string>,
   *                "document_num":<string>,
   *                "branch":<string>,
   *                "email":<string>,
   *                "phone":<string>
   *           },
   *           "office":{
   *               "id":<string>,
   *               "name":<string>,
   *               "webpage":<string>,
   *               "city":<string>,
   *               "country":<string>,
   *               "address":<string>,
   *               "phone":<string>
   *           }
   *     }
   *
   * @apiErrorExample Error-Response:
   *  HTTP/1.1 4xx Any Error
   *     {
   *         "type": <URI_REFERENCE_THAT_IDENTIFIES_THE_TYPE_OF_PROBLEM>,
   *         "title": <HUMAN_READABLE_SUMMARY_OF_THE_PROBLEM>,
   *         "code":<HTTP_CODE>
   *         "invalid-params": [ 
   *                    {
   *                      "name": <FIELD_ERROR>,
   *                      "reason": <REASON_OF_ERROR>
   *                    },
   *                    {
   *                      "name": <FIELD_ERROR>,
   *                      "reason": <REASON_OF_ERROR>
   *                    }
   *                  ]
   *     }
   * 
   * @apiExample {curl} Example usage:
   *     curl -XPUT -d '{
   *          "executive":{
   *                "firstname":<string>,
   *                "lastname":<string>,
   *                "document_num":<string>,
   *                "branch":<string>,
   *                "email":<string>,
   *                "phone":<string>
   *           },
   *           "office":{
   *               "id":<string>,
   *               "name":<string>,
   *               "webpage":<string>,
   *               "city":<string>,
   *               "country":<string>,
   *               "address":<string>,
   *               "phone":<string>
   *           }
   *     }' 'https://kong.portalfinance.co/executives/<executive_id>'
   */

/**
   * @api {get} /available-offices/ Retrieve available offices
   * @apiDescription Retrieve Available offices
   * @apiVersion 1.0.0
   * @apiName GetAvailableOffices
   * @apiGroup ExecutivesFinancialAPI
   *
   * @apiPermission None
   * 
   * 
   * @apiSuccess {Object[]} offices Offices Array Object.
   * @apiSuccess {String} offices.id Office Id.
   * @apiSuccess {String} offices.name Office Name.
   * @apiSuccess {String} offices.address Office address.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *          "offices":[
   *            {
   *                "id":<string>,
   *                "name":<string>,
   *                "address":<string>
   *           }
   *          ]  
   *     }
   *
   * @apiErrorExample Error-Response:
   *  HTTP/1.1 4xx Any Error
   *     {
   *         "type": <URI_REFERENCE_THAT_IDENTIFIES_THE_TYPE_OF_PROBLEM>,
   *         "title": <HUMAN_READABLE_SUMMARY_OF_THE_PROBLEM>,
   *         "code":<HTTP_CODE>
   *         "invalid-params": [ 
   *                    {
   *                      "name": <FIELD_ERROR>,
   *                      "reason": <REASON_OF_ERROR>
   *                    },
   *                    {
   *                      "name": <FIELD_ERROR>,
   *                      "reason": <REASON_OF_ERROR>
   *                    }
   *                  ]
   *     }
   * 
   * @apiExample {curl} Example usage:
   *     curl -XGET -d '{
   *    }' 'https://kong.portalfinance.co/available-offices/'
   */

   /**
   @api {post} /upload-photo/<user_id> [Financial] Upload Executive photo

   * @apiDescription Get Postulate invoices by financial
   * @apiVersion 1.0.0
   * @apiName GETPostulateInvoices
   * @apiGroup ExecutivesFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} user_id User id.
   * 
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiParam {Object[]} avatar Avatar Object.
   * @apiParam {String} avatar.filename File name.
   * @apiParam {String} avatar.filetype File type.
   * @apiParam {String} avatar.value Image encoded on base64.
   * 
   * @apiParamExample {json} Request Body Example:
   * 
   * HTTP/1.1 200 OK
   * {
   *    avatar: {
   *        filename: <string>,
   *        filetype: <string>,
   *        value: "<string>"
   *    }
   * }
   * 
   * @apiSuccess {String} user_id User Id.
   * @apiSuccess {String} filename File name.
   * @apiSuccess {String} path_s3 URL S3 bucket.
   *  
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *        "user_id":<string>
   *        "filename": <string>,
   *        "path_s3": <string>,
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
   *          -X POST https://kong.portalfinance.co/upload-photo/<user_id>
   */

    /**
   @api {post} /load-executives/[Financial] Load Executives 

   * @apiDescription Post Load Executives
   * @apiVersion 1.0.0
   * @apiName POSTLoadExecutives
   * @apiGroup ExecutivesFinancialAPI
   * 
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} user_id User id.
   * 
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiParam {String} filename File name.
   * @apiParam {String} filetype File type.
   * @apiParam {String} value CSV,TXT,XLS or XLSX file encoded on base64.
   * 
   * @apiParamExample {json} Request Body Example:
   * 
   * HTTP/1.1 200 OK
   * {
   *        "filename": <string>,
   *        "filetype": <string>,
   *        "value": <string>
   *    }
   * }
   * 
   * @apiSuccess {String} user_id User Id.
   * @apiSuccess {String} filename File name.
   * @apiSuccess {String} path_s3 URL S3 bucket.
   *  
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *        "filename": <string>,
   *        "path_s3": <string>
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
   *          -X POST https://kong.portalfinance.co/load-executives/<user_id>
   */