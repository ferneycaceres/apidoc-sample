var express = require('express');
var router = express.Router();

/**
   @api {get} /workflow/ok2pay/companies_list?page_number=<integer>&page_limit=<integer>&search=<string> OK2pay Companies list

   * @apiDescription Get OK2pay Companies list (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payCompaniesList
   * @apiGroup OK2PayWorkflowAPI
   *
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} page_number Current page.
   * @apiParam {String} page_limit Number of element to show in the current view.
   * @apiParam {String} search Search by keywords.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object[]} Suppliers Array Object.
   * @apiSuccess {Object} Suppliers.supplier Array Object.
   * @apiSuccess {String} Suppliers.supplier.entity_id  Entity id.
   * @apiSuccess {String} Suppliers.supplier.entity_tax_number  Entity tax number.
   * @apiSuccess {String} Suppliers.supplier.entity_name  Entity name.
   * @apiSuccess {Object[]} Suppliers.tasks Array Object.
   * @apiSuccess {String} Suppliers.tasks.task_id Task id.
   * @apiSuccess {String} Suppliers.tasks.task_name Task Name.
   * @apiSuccess {Boolean} Suppliers.tasks.task_value Task value.
   * @apiSuccess {String} Suppliers.available_amount Available amount.
   * @apiSuccess {Object} Suppliers.ok2pay_group Array Object.
   * @apiSuccess {String} Suppliers.ok2pay_group.group_id Group id.
   * @apiSuccess {String} Suppliers.ok2pay_group.group_name Group name.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   * "suppliers":[
   *     {
   *         "supplier": {
   *            "entity_id":<string>,
   *            "entity_tax_number":<string>,
   *            "entity_name":<string>
   *         },
   *         "tasks":[
   *             {
   *                "task_id":<string>,
   *                "task_name":<string>,
   *                "task_value":<boolean>
   *             },
   *             {
   *                "task_id":<string>,
   *                "task_name":<string>,
   *                "task_value":<boolean>
   *             },
   *             {
   *                "task_id":<string>,
   *                "task_name":<string>,
   *                "task_value":<boolean>
   *             }
   *         ],
   *        "available_amount":<number>,
   *        "ok2pay_group":{
   *            "group_id":<string>,
   *            "group_name":<string>
   *        }
   *     }
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
   *          -X POST https://kong.portalfinance.co/workflow/ok2pay/companies_list?page_number=<integer>&page_limit=<integer>&search=<string>
   */

   /**
   @api {get} /workflow/ok2pay/tasks_list OK2pay Tasks list

   * @apiDescription Get OK2pay Tasks list (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payTaskList
   * @apiGroup OK2PayWorkflowAPI
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
   * @apiSuccess {Object[]} Tasks Array Object.
   * @apiSuccess {String} Tasks.task_id Task id.
   * @apiSuccess {String} Tasks.task_name Task name.
   * @apiSuccess {Boolean} Tasks.task_default_value Task default value.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   * "tasks":[
   *     {
   *         "task_id": <string>,
   *         "task_name":<string>,
   *         "task_default_value":<boolean>
   *    },
   *    {
   *         "task_id": <string>,
   *         "task_name":<string>,
   *         "task_default_value":<boolean>
   *    },
   *    {
   *         "task_id": <string>,
   *         "task_name":<string>,
   *         "task_default_value":<boolean>
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
   *          -X POST https://kong.portalfinance.co/workflow/ok2pay/tasks_list
   */

   /**
   @api {get} /workflow/ok2pay/executives_list OK2pay Executives list

   * @apiDescription Get OK2pay Executives List (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payExecutivesList
   * @apiGroup OK2PayWorkflowAPI
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
   * @apiSuccess {Object[]} executives Executives Array Object.
   * @apiSuccess {String} executives.executive_id Executive id.
   * @apiSuccess {String} executives.executive_full_name Executive name.
   * @apiSuccess {Boolean} executives.executive_available Executive available.
   * 
   * 
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   * "executives":[
   *     {
   *         "executive_id": <string>,
   *         "executive_full_name":<string>,
   *         "executive_available":<boolean>
   *    },
   *    {
   *         "executive_id": <string>,
   *         "executive_full_name":<string>,
   *         "executive_available":<boolean>
   *    },
   *    {
   *         "executive_id": <string>,
   *         "executive_full_name":<string>,
   *         "executive_available":<boolean>
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
   *          -X POST https://kong.portalfinance.co/workflow/ok2pay/executives_list
   */

   /**
   * @api {post} /workflow/ok2pay/group/ Create OK2pay Group
   * @apiDescription Create OK2pay group (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName PostOK2payGroup
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} group_name Group name.
   * @apiParam {Object[]} tasks Tasks.
   * @apiParam {String} tasks.task_id Task Name.
   * @apiParam {String} tasks.task_value Task value.
   * @apiParam {Object[]} executives  Executives.
   * @apiParam {String} executives.executive_id Executive id.
   * 
   * @apiParamExample {json} Request Body Example:
   *      {
   *           "group_name":<string>,
   *           "tasks": [
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            }
   *           ],
   *           "executives":[
   *              {
   *               "executive_id":<string>
   *              },
   *              {
   *               "executive_id":<string>
   *              }
   *           ]
   *     }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} group_name Group name.
   * @apiSuccess {String} task_id Task Id.
   * @apiSuccess {String} task_name Task Name.
   * 
   * @apiParam {String} group_name Group name.
   * @apiParam {Object[]} tasks Tasks.
   * @apiParam {String} tasks.task_id Task Name.
   * @apiParam {String} tasks.task_value Task value.
   * @apiParam {Object[]} executives  Executives.
   * @apiParam {String} executives.executive_id Executive id.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "group_name":<string>,
   *           "tasks": [
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            }
   *           ],
   *           "executives":[
   *              {
   *               "executive_id":<string>
   *              },
   *              {
   *               "executive_id":<string>
   *              }
   *           ]
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
   *           "group_name":<string>,
   *           "tasks": [
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolean>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolean>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolean>
   *            }
   *           ],
   *           "executives":[
   *              {
   *               "executive_id":<string>
   *              },
   *              {
   *               "executive_id":<string>
   *              }
   *           ]
   *     }' 'https://kong.portalfinance.co/workflow/ok2pay/group/
   */

    /**
   @api {get} /workflow/ok2pay/groups_list?page_number=<integer>&page_limit=<integer>&search=<string> OK2pay Group List

   * @apiDescription Get OK2pay Group List (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payGroupList
   * @apiGroup OK2PayWorkflowAPI
   * 
   * @apiParam {String} page_number Current page.
   * @apiParam {String} page_limit Number of element to show in the current view.
   * @apiParam {String} search Search by keywords.
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
   * @apiSuccess {String} group_id Group id.
   * @apiSuccess {String} group_name Group name.
   * @apiSuccess {Object[]} tasks Task Array Object.
   * @apiSuccess {String} tasks.task_name Task name.
   * @apiSuccess {Object[]} tasks.task_name Task name.
   * @apiSuccess {Object[]} executives Executives Array Object.
   * @apiSuccess {String} executives.executive_id Executive id. 
   * @apiSuccess {String} executives.executive_name Executive name. 
   * @apiSuccess {String} num_companies Companies that belongs to this group.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   [
   *      "group_id":<string>,
   *      "group_name":<string>,
   *      "tasks":[
   *        {
   *           "task_name":<string>,
   *           "task_value":<boolean>
   *        },
   *        {
   *          "task_name":<string>,
   *          "task_value":<boolean>
   *        },
   *        {
   *          "task_name":<string>,
   *          "task_value":<boolean>
   *        }
   *        ],
   *        "executives":[
   *        {
   *          "executive_id":<string>,
   *          "executive_name":<string>
   *        },
   *        "num_companies":<number>
   *    ]
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
   *          -X POST https://kong.portalfinance.co/workflow/ok2pay/group_list?page_number=<integer>&page_limit=<integer>&search=<string>
   */

   /**
   @api {get} /workflow/ok2pay/groups/group_id=<string>

   * @apiDescription Get OK2pay Group Detail (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payGroupDetail
   * @apiGroup OK2PayWorkflowAPI
   * 
   * @apiParam {String} group_id Group_id.
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
   * @apiSuccess {String} group_id Group id.
   * @apiSuccess {String} group_name Group name.
   * @apiSuccess {Object[]} tasks Task Array Object.
   * @apiSuccess {String} tasks.task_name Task name.
   * @apiSuccess {Object[]} tasks.task_name Task name.
   * @apiSuccess {Object[]} executives Executives Array Object.
   * @apiSuccess {String} executives.executive_id Executive id. 
   * @apiSuccess {String} executives.executive_name Executive name. 
   * @apiSuccess {String} num_companies Companies that belongs to this group.
   * @apiSuccess {Object[]} companies Companies list that belongs to this group.
   * @apiSuccess {String} companies.entity_id Entity id.
   * @apiSuccess {String} companies.entity_name Entity name .
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *      "group_id":<string>,
   *      "group_name":<string>,
   *      "tasks":[
   *        {
   *           "task_name":<string>,
   *           "task_value":<boolean>
   *        },
   *        {
   *          "task_name":<string>,
   *          "task_value":<boolean>
   *        },
   *        {
   *          "task_name":<string>,
   *          "task_value":<boolean>
   *        }
   *        ],
   *        "executives":[
   *        {
   *          "executive_id":<string>,
   *          "executive_name":<string>
   *        },
   *        "num_companies":<number>,
   *        "companies":[
   *        {
   *           "entity_id":<string>,
   *           "entity_name":<string>
   *        }
   *        ]
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
   *          -X POST https://kong.portalfinance.co/workflow/ok2pay/group_id=<string>
   */

   /**
   * @api {put} /workflow/ok2pay/group/ Edit OK2pay Group
   * @apiDescription Edit OK2pay group (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName PutOK2payGroup
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} group_name Group name.
   * @apiParam {Object[]} tasks Tasks.
   * @apiParam {String} tasks.task_id Task Name.
   * @apiParam {String} tasks.task_value Task value.
   * @apiParam {Object[]} executives  Executives.
   * @apiParam {String} executives.executive_id Executive id.
   * 
   * @apiParamExample {json} Request Body Example:
   *      {
   *           "group_name":<string>,
   *           "tasks": [
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            },group_id=<string>
   *            {
   *              group_id=<string>
   *              group_id=<string>
   *            },group_id=<string>
   *            {
   *              group_id=<string>
   *                "task_value":<boolen>
   *            }
   *           ],
   *           "executives":[
   *              {
   *               "executive_id":<string>
   *              },
   *              {
   *               "executive_id":<string>
   *              }
   *           ]
   *     }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} group_name Group name.
   * @apiSuccess {Object[]} tasks Tasks.
   * @apiSuccess {String} tasks.task_id Task Name.
   * @apiSuccess {String} tasks.task_value Task value.
   * @apiSuccess {Object[]} executives  Executives.
   * @apiSuccess {String} executives.executive_id Executive id.
   * 
   * @apiParam {String} group_name Group name.
   * @apiParam {Object[]} tasks Tasks.
   * @apiParam {String} tasks.task_id Task Name.
   * @apiParam {String} tasks.task_value Task value.
   * @apiParam {Object[]} executives  Executives.
   * @apiParam {String} executives.executive_id Executive id.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "group_name":<string>,
   *           "tasks": [
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            }
   *           ],
   *           "executives":[
   *              {
   *               "executive_id":<string>
   *              },
   *              {
   *               "executive_id":<string>
   *              }
   *           ]
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
   *           "group_name":<string>,
   *           "tasks": [
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolean>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolean>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolean>
   *            }
   *           ],
   *           "executives":[
   *              {
   *               "executive_id":<string>
   *              },
   *              {
   *               "executive_id":<string>
   *              }
   *           ]
   *     }' 'https://kong.portalfinance.co/workflow/ok2pay/group/
   */

   /**
   @api {get} /workflow/ok2pay/pending_offers_by_executive/?executive_id=<string>

   * @apiDescription Get Pending offer to approve by Executive (Executive User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payPendingOffersByExecutive
   * @apiGroup OK2PayWorkflowAPI
   * 
   * @apiParam {String} executive_id Executive Id.
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
   * @apiSuccess {String} context_id Context id.
   * @apiSuccess {String} offer_id Offer id.
   * @apiSuccess {String} offer_number Offer number.
   * @apiSuccess {String} offer_amount Offer Amount.
   * @apiSuccess {String} offer_issue_date Offer issue date.
   * @apiSuccess {Object[]} supplier Supplier.
   * @apiSuccess {String} supplier.legal_entity_id Supplier id. 
   * @apiSuccess {String} supplier.legal_entity_name Supplier name. 
   * @apiSuccess {String} supplier.legal_entity_tax_number Supplier Taxnumber. 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * [
   *    {
   *      "context_id":<string>,
   *      "offer_id":<string>,
   *      "offer_number":<string>,
   *      "offer_amount":<number>,
   *      "offer_issue_date":<date>
   *      "supplier":
   *       {
   *           "legal_entity_id":<string>,
   *           "legal_entity_name":<string>,
   *            "legal_entity_tax_number":<string>
   *       }
   *    }
   * ]
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
   *          -X POST https://kong.portalfinance.co/workflow/ok2pay/pending_offers_by_executive/?executive_id=<string>
   */

  /**
   @api {get} /workflow/ok2pay/context/?context_id=<string>

   * @apiDescription Get Context to validate tasks required (Executive User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payExecutiveContext
   * @apiGroup OK2PayWorkflowAPI
   * 
   * @apiParam {String} context_id Context Id.
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
   * @apiSuccess {String} context_id Context id.
   * @apiSuccess {Object} offer Offer.
   * @apiSuccess {String} offer.offer_number Offer number.
   * @apiSuccess {String} offer.offer_amount Offer Amount.
   * @apiSuccess {String} offer.offer_issue_date Offer issue date.
   * @apiSuccess {Object[]} available_actions Available actions.
   * @apiSuccess {String} available_actions.task_id Task id. 
   * @apiSuccess {String} available_actions.task_name Task name. 
   * @apiSuccess {String} available_actions.task_state Task State. 
   *  
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * [
   *    {
   *      "context_id":<string>,
   *      "offer":{
   *        "offer_number":<string>,
   *        "offer_amount":<number>,
   *        "offer_issue_date":<date>
   *      },
   *      "available_actions":[
   *             {
   *                 "task_id":<string>,
   *                 "task_name":<string>,
   *                 "task_state":<string>,
   *             },
   *             {
   *                 "task_id":<string>,
   *                 "task_name":<string>,
   *                 "task_state":<string>,
   *             },
   *             {
   *                 "task_id":<string>,
   *                 "task_name":<string>,
   *                 "task_state":<string>,
   *             }
   *         ]
   *    }
   * ]
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
   *          -X POST https://kong.portalfinance.co/workflow/ok2pay/context/?context_id=<string>
   */


   /**
   * @api {post} /workflow/ok2pay/validate/ Validate OK2pay action 
   * @apiDescription Validate OK2pay Action (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName PostValidateOK2payAction
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} context_id Context Id.
   * @apiParam {String} task_id Task Name.
   * @apiParam {String} task_value Task value.
   * 
   * @apiParamExample {json} Request Body Example:
   *      {
   *           "context_id":<string>,
   *           "task_id":<string>,
   *           "task_value":<boolean>
   *     }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} group_name Group name.
   * @apiSuccess {String} task_id Task Id.
   * @apiSuccess {String} task_name Task Name.
   * 
   * @apiParam {String} group_name Group name.
   * @apiParam {Object[]} tasks Tasks.
   * @apiParam {String} tasks.task_id Task Name.
   * @apiParam {String} tasks.task_value Task value.
   * @apiParam {Object[]} executives  Executives.
   * @apiParam {String} executives.executive_id Executive id.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "group_name":<string>,
   *           "tasks": [
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolen>
   *            }
   *           ],
   *           "executives":[
   *              {
   *               "executive_id":<string>
   *              },
   *              {
   *               "executive_id":<string>
   *              }
   *           ]
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
   *           "group_name":<string>,
   *           "tasks": [
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolean>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolean>
   *            },
   *            {
   *                "task_id":<string>,
   *                "task_value":<boolean>
   *            }
   *           ],
   *           "executives":[
   *              {
   *               "executive_id":<string>
   *              },
   *              {
   *               "executive_id":<string>
   *              }
   *           ]
   *     }' 'https://kong.portalfinance.co/workflow/ok2pay/validate/
   */