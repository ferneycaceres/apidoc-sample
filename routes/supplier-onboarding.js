var express = require('express');
var router = express.Router();

/**
   * @api {post} /sign-in Sign In User 
   * @apiDescription Sign in Users
   * @apiVersion 1.0.0
   * @apiName PostAuthorization
   * @apiGroup SupplierOnboardingAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} User.username  Username Encrypted.
   * @apiParam {String} User.password Password user Encrypted.
   * 
   * @apiParamExample {json} Request Body Example:
   * {
   *         "username": <string>,
   *         "password": <string>
   * }
   *
   * 
   * @apiSuccess {String} token Token.
   * @apiSuccess {Object} user User Object.
   * @apiSuccess {String} user.id User Id.
   * @apiSuccess {String} user.email User Email.
   * @apiSuccess {String} user.first_name User Firstname.
   * @apiSuccess {String} user.last_name User Lastname.
   * @apiSuccess {String} user.tin User Tax number.
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "token":<string>,
   *       "user":{
   *           "id":<string>,
   *           "email":<string>,
   *           "first_name":<string>,
   *           "last_name":<string>,
   *           "tin":<string>
   *           },
   *       "frontend_components":[
   *            "permission_1",
   *            "permission_2",
   *            "permission_3"
   *        ]
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
   *     curl -XPOST -d '{
   *         "username": "B1q2hUEKmeVp9zWepx9cnp",
   *         "password": "eVp9zWepx9=",
   *    }' 'https://kong.portalfinance.co/sign-in/'
   */

   /**
   @api {get} /economic-sectors/ Retrieve List Economic Sectors

   * @apiDescription Retrieve List Economic Sectors ([Dropdown] register new supplier form)
   * @apiVersion 1.0.0
   * @apiName GetEconomicSectors
   * @apiGroup SupplierOnboardingAPI
   *
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {String} code Economic sector code.
   * @apiSuccess {String} name Economic sector name.
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * 
   * "economic_sectors": [
   *    {
   *      "code":<string>,
   *      "name":<string>
   *    }
   * ]
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
   *          -X POST https://kong.portalfinance.co/economic-sectors/
   */

    /**
   @api {get} /terms-and-conditions/ Retrieve Terms and Conditions

   * @apiDescription Retrieve Terms and Conditions (Modal)
   * @apiVersion 1.0.0
   * @apiName GetTermsandConditions
   * @apiGroup SupplierOnboardingAPI
   *
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {String} template HTML Template for Financial Institution.
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *      "template":<string>
   * }
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
   *          -X POST https://kong.portalfinance.co/economic-sectors/
   */

   /**
   * @api {post} /supplier-onboardings Create new supplier
   * @apiDescription Create new supplier
   * @apiVersion 1.0.0
   * @apiName PostCreateNewSupplier
   * @apiGroup SupplierOnboardingAPI
   *
   * @apiPermission None
   * 
   * @apiParam {Object} user User Object.
   * @apiParam {String} user.first_name User Firstname.
   * @apiParam {String} user.last_name User Lastname.
   * @apiParam {String} user.tin User Tax number.
   * @apiParam {String} user.email User Email.
   * @apiParam {String} user.password User Password.
   * @apiParam {Object} company Company Object.
   * @apiParam {String} company.tin Company Tax number.
   * @apiParam {String} company.economic_sector Economic sector code.
   * @apiParam {Number} company.monthly_net_profit Montly net profit.
   * @apiParam {Number} company.days_of_average_credit_to_clients Days of average credit to clients.
   * @apiParam {Object} business_relation Business Relation Object.
   * @apiParam {Object} business_relation.party_2 2nd Party legal entity id.
   * 
   * @apiParamExample {json} Request Body Example:
   * {
   *       "user":{
   *            "first_name":<string>,
   *            "last_name"<string>,
   *            "tin":<string>,
   *            "email":<string>,
   *            "password":<string>
   *         },
   *        "company":{
   *            "tin":<string>,
   *            "economic_sector":<string>,
   *            "monthly_net_profit":<number>,
   *            "days_of_average_credit_to_clients":<number>
   *        },
   *        "business_relation":{
   *            "party_2":<string>
   *        }
   * }
   * @apiSuccess {Object} user User Object.
   * @apiSuccess {String} user.id User Id.
   * @apiSuccess {String} user.first_name User Firstname.
   * @apiSuccess {String} user.last_name User Lastname.
   * @apiSuccess {String} user.tin User Tax number.
   * @apiSuccess {Object} company Company Object.
   * @apiSuccess {String} company.id Company Id.
   * @apiSuccess {String} company.name Company name.
   * @apiSuccess {String} company.tin Company Tax number.
   *
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *     "user":{
   *            "id":<string>,
   *            "first_name":<string>,
   *            "last_name"<string>,
   *            "tin":<string>,
   *         },
   *        "company":{
   *            "id":<string>,
   *            "name":<string>
   *            "tin":<string>,
   *        }
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
   * 
   * @apiExample {curl} Example usage:
   *     curl -XPOST -d '{
   *       "user":{
   *            "first_name":<string>,
   *            "last_name"<string>,
   *            "tin":<string>,
   *            "email":<string>,
   *            "password":<string>
   *         },
   *        "company":{
   *            "tin":<string>,
   *            "economic_sector":<string>,
   *            "monthly_net_profit":<number>,
   *            "days_of_average_credit_to_clients":<number>
   *        }
   * }' 'https://kong.portalfinance.co/supplier-onboardings'
   */

    /**
   @api {get} /accounts/available-accounts/<country_code>/<tin> Retrieve Available Accounts

   * @apiDescription Retrieve Available Accounts(Tabs)
   * @apiVersion 1.0.0
   * @apiName GetAvailableAccounts
   * @apiGroup SupplierOnboardingAPI
   *
   * 
   * @apiParam {String} country_code country code.
   * @apiParam {String} tin Tax number.
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object[]} available_accounts Available accounts Array Object.
   * @apiSuccess {string} available_accounts.account_provider account provider.
   * @apiSuccess {string} available_accounts.name account provider name.
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *      "available_accounts":[
   *        "account_provider":<string>,
   *        "name":<string>
   *      ]
   * }
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
   *          -X POST https://kong.portalfinance.co/accounts/available-accounts/<country_code>/<tin>
   */

   /**
   * @api {post} /accounts Register providers accounts
   * @apiDescription Validate and start scrapers  
   * @apiVersion 1.0.0
   * @apiName PostRegisterProvider
   * @apiGroup SupplierOnboardingAPI
   *
   * @apiPermission None
   * 
   * @apiParam {Object} user User Object.
   * @apiParam {Object} authorized_user Authorized User Object.
   * @apiParam {String} authorized_user.username User name (TIN).
   * @apiParam {String} authorized_user.provider_code Provider Code.
   * 
   * @apiParamExample {json} Request Body Example:
   *  HTTP/1.1 200 OK
   * {
   *     "authorized_user":{
   *            "username":<string>,
   *            "password":<string>,
   *            "provider_code"<string>
   *         }
   * }
   * 
   * @apiSuccess {Object} authorized_user Authorized User Object.
   * @apiSuccess {String} authorized_user.username User name (TIN).
   * @apiSuccess {String} authorized_user.provider_code Provider Code.
   * 
   * @apiSuccessExample Success-Response:
   * 
   * HTTP/1.1 200 OK
   * {
   *   "provider_code":<string>,
   *   "message":<string>
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
   * 
   * @apiExample {curl} Example usage:
   *     curl -XPOST -d '{
   *        "provider_code":<string>,
   *        "message":<string>
   *    }' 'https://kong.portalfinance.co/'
   */

   /**
   * @api {post} /forgot-password Forgot password 
   * @apiDescription  Have you forgotten the password? 
   * @apiVersion 1.0.0
   * @apiName PostForgotPassword
   * @apiGroup SupplierOnboardingAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} email User email.
   * 
   * @apiParamExample {json} Request Body Example:
   *  HTTP/1.1 200 OK
   * {
   *     "email":<string>
   * }
   * 
   * @apiSuccess {Object} authorized_user Authorized User Object.
   * @apiSuccess {String} authorized_user.username User name (TIN).
   * @apiSuccess {String} authorized_user.provider_code Provider Code.
   * 
   * @apiSuccessExample Success-Response:
   * 
   * HTTP/1.1 200 OK
   * {
   *   "email":<string>,
   *   "message":<string>
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
   * 
   * @apiExample {curl} Example usage:
   *     curl -XPOST -d '{
   *         "email": "B1q2hUEKmeVp9zWepx9cnp",
   *    }' 'https://kong.portalfinance.co/forgot-password'
   */

   /**
   * @api {post} /validate-code Validate generated code
   * @apiDescription Validate generated code to restart Password sent to user by email
   * @apiVersion 1.0.0
   * @apiName PostValidateCode
   * @apiGroup SupplierOnboardingAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} token Code sent to user by email.
   * 
   * @apiParamExample {json} Request Body Example:
   *  HTTP/1.1 200 OK
   * {
   *     "token":<string>
   * }
   * 
   * @apiSuccess {String} message Message.
   * 
   * @apiSuccessExample Success-Response:
   * 
   * HTTP/1.1 200 OK
   * {
   *   "message":<string>
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
   * 
   * @apiExample {curl} Example usage:
   *     curl -XPOST -d '{
   *         "token": "B1q2hUEKmeVp9zWepx9cnp",
   *    }' 'https://kong.portalfinance.co/validate-token'
   */

   /**
   * @api {post} /reset-password Reset Password
   * @apiDescription Reset password 
   * @apiVersion 1.0.0
   * @apiName PostResetPassword
   * @apiGroup SupplierOnboardingAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} token Code sent to user by email.
   * 
   * @apiParamExample {json} Request Body Example:
   *  HTTP/1.1 200 OK
   * {
   *     "token":<string>,
   *     "new_password":<string>
   * }
   * 
   * @apiSuccess {String} message Message.
   * 
   * @apiSuccessExample Success-Response:
   * 
   * HTTP/1.1 200 OK
   * {
   *   "message":<string>
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
   * 
   * @apiExample {curl} Example usage:
   *     curl -XPOST -d '{
   *         "token":<string>,
   *         "new_password":<string>
   *    }' 'https://kong.portalfinance.co/reset-password'
   */