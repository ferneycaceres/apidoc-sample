var express = require('express');
var router = express.Router();

/**
   * @api {get} /users/<user_id> Retrieve user Profile
   * @apiDescription Retrieve user Profile
   * @apiVersion 1.0.0
   * @apiName GetUserProfile
   * @apiGroup SupplierDashboardAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} company_tin Company Tax Number .
   * 
   * 
   * @apiSuccess {String} id User Id.
   * @apiSuccess {String} first_name User Firstname.
   * @apiSuccess {String} last_name User Lastname.
   * @apiSuccess {String} tin User Tax number.
   * @apiSuccess {String} country User Country.
   * @apiSuccess {String} email User Email.
   * @apiSuccess {String} address User Address.
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "first_name":<string>,
   *           "last_name":<string>,
   *           "telephone":<string>,
   *           "tin":<string>,
   *           "country":<string>,
   *           "email":<string>,
   *           "address":<string>
   *     }
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
   *     curl -XGET -d '{
   *    }' 'https://kong.portalfinance.co/users/<user_id>'
   */


   /**
   * @api {get} /graphs/ Retrieve Dashboard Graphs 
   * @apiDescription Retrieve Dashboard Graphs from Tableu Server
   * @apiVersion 1.0.0
   * @apiName GetGraphs
   * @apiGroup SupplierDashboardAPI
   *
   * @apiPermission None
   * 
   * 
   * @apiSuccess {Object[]} graphs Graphs Array Object.
   * @apiSuccess {String} graphs.title Graph Title.
   * @apiSuccess {String} graphs.description Graph Description.
   *@apiSuccess {String} graphs.url Graph Url
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "graphs":[
   *               {
   *                  "title":<string>,
   *                  "description":<string>,
   *                  "url":<string>
   *            ]
   *     }
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
   *     curl -XGET -d '{
   *    }' 'https://kong.portalfinance.co/graphs/'
   */

   /**
   * @api {get} /companies/<company_tin> Retrieve Company Profile
   * @apiDescription Retrieve Company Profile
   * @apiVersion 1.0.0
   * @apiName GetCompanyProfile
   * @apiGroup SupplierDashboardAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} company_tin Company Tax Number .
   * 
   * 
   * @apiSuccess {String} id Company Id.
   * @apiSuccess {String} name Company name.
   * @apiSuccess {String} telephone Company Telephone.
   * @apiSuccess {String} tin Company Tax number.
   * @apiSuccess {String} country Company Country.
   * @apiSuccess {String} address Company Address.
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "id":<string>,
   *           "name":<string>,
   *           "telephone":<string>,
   *           "tin":<string>,
   *           "country":<string>,
   *           "address":<string>
   *     }
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
   *     curl -XGET -d '{
   *    }' 'https://kong.portalfinance.co/companies/<company_tin>'
   */

  /**
   * @api {put} /users/<user_id> Update user Profile
   * @apiDescription Update user Profile
   * @apiVersion 1.0.0
   * @apiName PutUserProfile
   * @apiGroup SupplierDashboardAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} user_id User id .
   * 
   * @apiParam {String} id User Id.
   * @apiParam {String} first_name User Firstname.
   * @apiParam {String} last_name User Lastname.
   * @apiParam {String} tin User Tax number.
   * @apiParam {String} country User Country.
   * @apiParam {String} email User Email.
   * @apiParam {String} address User Address.
   * 
   *
   * @apiParamExample {json} Request Body Example:
   *     HTTP/1.1 200 OK
   *     {
   *           "id":<string>,
   *           "first_name":<string>,
   *           "last_name":<string>,
   *           "telephone":<string>,
   *           "tin":<string>,
   *           "country":<string>,
   *           "email":<string>,
   *           "address":<string>
   *     }
   * 
   * @apiSuccess {String} first_name User Firstname.
   * @apiSuccess {String} last_name User Lastname.
   * @apiSuccess {String} tin User Tax number.
   * @apiSuccess {String} country User Country.
   * @apiSuccess {String} email User Email.
   * @apiSuccess {String} address User Address.
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "first_name":<string>,
   *           "last_name":<string>,
   *           "telephone":<string>,
   *           "tin":<string>,
   *           "country":<string>,
   *           "email":<string>,
   *           "address":<string>
   *     }
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
   *     curl -XPUT -d '{
   *           "id":<string>,
   *           "first_name":<string>,
   *           "last_name":<string>,
   *           "telephone":<string>,
   *           "tin":<string>,
   *           "country":<string>,
   *           "email":<string>,
   *           "address":<string>
   *    }' 'https://kong.portalfinance.co/users/<user_id>'
   */

    /**
   * @api {put} /companies/<company_tin> Update Company Profile
   * @apiDescription Update Company Profile
   * @apiVersion 1.0.0
   * @apiName PutCompanyProfile
   * @apiGroup SupplierDashboardAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} company_tin Company Tax Number .
   * 
   * 
   * @apiParam {String} id Company Id.
   * @apiParam {String} name Company name.
   * @apiParam {String} telephone Company Telephone.
   * @apiParam {String} tin Company Tax number.
   * @apiParam {String} country Company Country.
   * @apiParam {String} address Company Address.
   * 
   *
   * @apiParamExample {json} Request Body Example:
   *     HTTP/1.1 200 OK
   *     {
   *           "id":<string>,
   *           "name":<string>,
   *           "telephone":<string>,
   *           "tin":<string>,
   *           "country":<string>,
   *           "address":<string>
   *     }
   * 
   * 
   * @apiSuccess {String} id Company Id.
   * @apiSuccess {String} name Company name.
   * @apiSuccess {String} telephone Company Telephone.
   * @apiSuccess {String} tin Company Tax number.
   * @apiSuccess {String} country Company Country.
   * @apiSuccess {String} address Company Address.
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "id":<string>,
   *           "name":<string>,
   *           "telephone":<string>,
   *           "tin":<string>,
   *           "country":<string>,
   *           "address":<string>
   *     }
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
   *     curl -XPUT -d '{
   *           "id":<string>,
   *           "name":<string>,
   *           "telephone":<string>,
   *           "tin":<string>,
   *           "country":<string>,
   *           "address":<string>
   *    }' 'https://kong.portalfinance.co/companies/<company_tin>'
   */