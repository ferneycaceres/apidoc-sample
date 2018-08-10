var express = require('express');
var router = express.Router();

/**
   @api {get} /workflow/ok2pay/companies_list?page_number=<integer>&page_limit=<integer>&search=<string> OK2pay Companies list

   * @apiDescription Get OK2pay Companies list
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

   * @apiDescription Get OK2pay Tasks list
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

   * @apiDescription Get OK2pay Executives List
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
   * @apiDescription Create OK2pay group
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
   *           "offer_id":"0929aa4c-6294-11e8-adc0-fa7ae01bbebc"
   *           "task_id":"3",
   *           "task_name":"validate_offer",
   *           "value":true,
   *           "updated_by":"306358d6-d6ef-46b9-b32d-ec2e9c739373"
   *         }' 'https://kong.portalfinance.co/workflow/ok2pay/execute_task/
   */