var express = require('express');
var router = express.Router();

/**
   @api {get} /ok2pay/groups/members?page_number=<integer>&page_limit=<integer>&search=<string>&sort_by=<string>&type=<string> 1 OK2pay Group Members

   * @apiDescription Get OK2pay Members list (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payMembers
   * @apiGroup OK2PayWorkflowAPI
   *
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
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
   * @apiSuccess {Object[]} members Members Array Object.
   * @apiSuccess {Object} members.member Member Array Object.
   * @apiSuccess {String} members.member.entity_id  Member Entity id.
   * @apiSuccess {String} members.member.entity_tax_number  Member Entity tax number.
   * @apiSuccess {String} members.member.entity_name Member Entity name.
   * @apiSuccess {Object[]} members.tasks Member's tasks Array Object.
   * @apiSuccess {String} members.tasks.task_id Member's Task id.
   * @apiSuccess {String} members.tasks.task_name Member's Task Name.
   * @apiSuccess {Boolean} members.tasks.task_value Member's Task value.
   * @apiSuccess {Number} members.available_amount Available amount.
   * @apiSuccess {Object} members.ok2pay_group Member's OK2pay Array Object.
   * @apiSuccess {String} members.ok2pay_group.group_id Member's OK2pay  Group id.
   * @apiSuccess {String} members.ok2pay_group.group_name Member's OK2pay Group name.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   * "members":[
   *     {
   *         "member": {
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
   *          -X POST https://kong.portalfinance.co/ok2pay/group/members?page_number=<integer>&page_limit=<integer>&search=<string>
   */

   

   /**
   @api {get} /ok2pay/requirements OK2pay Requirements

   * @apiDescription Get OK2pay Requirements (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payRequirements
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
   * @apiSuccess {Object[]} requirements Requirements Array Object.
   * @apiSuccess {String} requirements.id Requirement id.
   * @apiSuccess {String} requirements.name Requirement name.
   * @apiSuccess {Boolean} requirements.default_value Requirementdefault value.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   * "requirements":[
   *     {
   *         "id": <string>,
   *         "name":<string>,
   *         "default_value":<boolean>
   *    },
   *    {
   *         "id": <string>,
   *         "name":<string>,
   *         "default_value":<boolean>
   *    },
   *    {
   *         "id": <string>,
   *         "name":<string>,
   *         "default_value":<boolean>
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
   *          -X POST https://kong.portalfinance.co/ok2pay/requirements
   */

   /**
   @api {get} /ok2pay/executives OK2pay Executives list

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
   * @apiSuccess {String} executives.id Executive id.
   * @apiSuccess {String} executives.full_name Executive name.
   * @apiSuccess {Boolean} executives.available Executive available.
   * 
   * 
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   * "executives":[
   *     {
   *         "id": <string>,
   *         "full_name":<string>,
   *         "available":<boolean>
   *    },
   *    {
   *         "id": <string>,
   *         "full_name":<string>,
   *         "available":<boolean>
   *    },
   *    {
   *         "id": <string>,
   *         "full_name":<string>,
   *         "available":<boolean>
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
   *          -X POST https://kong.portalfinance.co/ok2pay/executives
   */

   /**
   * @api {post} /ok2pay/groups/ Create OK2pay Group
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
   * 
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
   *                "|_id":<string>,
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
   *     }' 'https://kong.portalfinance.co/ok2pay/group/
   */

    /**
   @api {get} /ok2pay/groups?page_number=<integer>&page_limit=<integer>&search=<string>&sort_by=<string>&type_sort=<string> 2 OK2pay Group List

   * @apiDescription Get OK2pay Group List (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payGroupList
   * @apiGroup OK2PayWorkflowAPI
   * 
   * @apiParam {String} page_number Current page.
   * @apiParam {String} page_limit Number of element to show in the current view.
   * @apiParam {String} search Search by keywords.
   * @apiParam {String} sort_by Sort by Column.
   * @apiParam {String} type_sort Type Sort (DES or ASC).
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
   * @apiSuccess {String} num_companies Companies that belongs to this group.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   [
   *      "group_id":<string>,
   *      "group_name":<string>,
   *      "num_companies":<number>
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
   *          -X POST https://kong.portalfinance.co/ok2pay/groups?page_number=<integer>&page_limit=<integer>&search=<string>
   */

   /**
   @api {get} /ok2pay/groups/group_id=<string> 3 OK2pay Group details

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
   * @apiSuccess {Object} group Group Object.
   * @apiSuccess {String} group.group_id Group id.
   * @apiSuccess {String} group.group_name Group name.
   * @apiSuccess {Object[]} group.tasks Task Array Object.
   * @apiSuccess {String} group.tasks.task_id Task id.
   * @apiSuccess {String} group.tasks.task_name Task name.
   * @apiSuccess {boolean} group.tasks.task_value Task Value.
   * @apiSuccess {Object[]} group.executives Executives Array Object.
   * @apiSuccess {String} group.executives.executive_id Executive id. 
   * @apiSuccess {String} group.executives.executive_name Executive name. 
   * @apiSuccess {String} num_members Companies that belongs to this group.
   * @apiSuccess {Object[]} members Members list that belongs to this group.
   * @apiSuccess {String} members.entity_id Entity id.
   * @apiSuccess {String} members.entity_tax_number Entity Tax number.
   * @apiSuccess {String} members.entity_name Entity name .
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * {
   *    "group": {
   *        "group_id":<string>,
   *        "group_name":<string>,
   *        "tasks":[
   *          {
   *             "task_id":<string>,
   *             "task_name":<string>,
   *             "task_value":<boolean>
   *          },
   *          {
   *            "task_id":<string>,
   *            "task_name":<string>,
   *            "task_value":<boolean>
   *          },
   *          {
   *            "task_id":<string>,
   *            "task_name":<string>,
   *            "task_value":<boolean>
   *          }
   *          ],
   *          "executives":[
   *          {
   *            "executive_id":<string>,
   *            "executive_name":<string>
   *          },
   *          {
   *            "executive_id":<string>,
   *            "executive_name":<string>
   *          }
   *        },
   *        "num_members":<number>,
   *        "members":[
   *        {
   *            "entity_id":<string>,
   *            "entity_tax_number":<string>,
   *            "entity_name":<string>
   *        },
   *        {
   *            "entity_id":<string>,
   *            "entity_tax_number":<string>,
   *            "entity_name":<string>
   *        }
   *        ]
   *   }
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
   *          -X POST https://kong.portalfinance.co/ok2pay/group_id=<string>
   */

   /**
   * @api {put} /ok2pay/groups?group_id=<string> 4 Edit OK2pay Group
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
   *     curl -XPUT -d '{
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
   *     }' 'https://kong.portalfinance.co/ok2pay/groups/
   */

    /**
   * @api {delete} /ok2pay/groups?group_id=<string> Delete OK2pay Group
   * @apiDescription Delete OK2pay group (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName DeleteOK2payGroup
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * 
   * @apiParamExample {json} Request Body Example:
   *      {}
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} group_id Group name.
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "group_id":<string>
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
   *     curl -XDELETE -d '{
   *           "group_id":<string>'
   *           'https://kong.portalfinance.co/ok2pay/groups/
   */


   /**
   @api {get} /workflow/ok2pay/pending_offers_by_executive/?executive_id=<string> Pending Offer by Executive

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
   * @apiSuccess {Object} offer Offer Object.
   * @apiSuccess {String} offer.id Offer id.
   * @apiSuccess {String} offer.number Offer number.
   * @apiSuccess {String} offer.amount Offer Amount.
   * @apiSuccess {String} offer.issue_date Offer issue date.
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
   *       "offer":
   *       {
   *            "id":<string>,
   *            "number":<number>,
   *            "amount":<string>
   *            "issue_date":<date>
   *       }
   *       "supplier":
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
   @api {get} /workflow/ok2pay/context/?context_id=<string> Context by Executive

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
   * @apiSuccess {String} workflow_id Workflow id.
   * @apiSuccess {String} context_id Context id.
   * @apiSuccess {Object} offer Offer.
   * @apiSuccess {String} offer.offer_number Offer number.
   * @apiSuccess {String} offer.offer_amount Offer Amount.
   * @apiSuccess {String} offer.offer_issue_date Offer issue date.
   * @apiSuccess {Object[]} graphs Graphs URLs.
   * @apiSuccess {Object[]} graphs.graph1_url Graphs 1 URL.
   * @apiSuccess {Object[]} graphs.graph1_url Graphs 2 URL.
   * @apiSuccess {Object[]} available_actions Available actions.
   * @apiSuccess {String} available_actions.task_id Task id. 
   * @apiSuccess {String} available_actions.task_name Task name. 
   * @apiSuccess {String} available_actions.task_state Task State. 
   * @apiSuccess {Object[]} available_actions.task_information Task Information. 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * [
   *    {
   *      "workflow_id":<string>
   *      "context_id":<string>,
   *      "offer":{
   *        "offer_number":<string>,
   *        "offer_amount":<number>,
   *        "offer_issue_date":<date>
   *      },
   *      "graphs":[
   *        "graph1_url":<string>,
   *        "graph2_url":<string>
   *      ]
   *      "available_actions":[
   *             {
   *                 "task_id":<string>,
   *                 "task_name":<string>,
   *                 "task_state":<string>,
   *                 "task_url":<string>,
   *                 "task_information":[
   *                    "field_1":<string>,
   *                    "field_2":<number>,
   *                    "field_3":<date>
   *                 ]
   *             },
   *             {
   *                 "task_id":<string>,
   *                 "task_name":<string>,
   *                 "task_state":<string>,
   *                 "task_information":[
   *                    "field_1":<string>,
   *                    "field_2":<number>,
   *                    "field_3":<date>
   *                 ]
   *             },
   *             {
   *                 "task_id":<string>,
   *                 "task_name":<string>,
   *                 "task_state":<string>,
   *                 "task_information":[
   *                    "field_1":<string>,
   *                    "field_2":<number>,
   *                    "field_3":<date>
   *                 ]
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
   * @api {post} /workflow/ok2pay/<workflow_id>/task/<task_name>/approve Approve OK2Pay task
   * @apiDescription Approve OK2pay Task (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName PostApproveOK2payTask
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} workflow_id Workflow Id.
   * @apiParam {String} task_name Task Name.
   * 
   * @apiParamExample {json} Request Body Example:
   *      {}
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} workflow_id Workflow id.
   * @apiSuccess {String} task_id Task Id.
   * @apiSuccess {String} task_name Task Name.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "workflow_id":<string>,
   *           "tasks": [
   *            {
   *                "name":<string>,
   *                "state":<boolen>,
   *                "approve_url":<boolen>,
   *                "disaprove_url":<boolen>,
   *            },
   *            {
   *                "name":<string>,
   *                "state":<boolen>,
   *                "approve_url":<boolen>,
   *                "disaprove_url":<boolen>,
   *            },
   *            {
   *                "name":<string>,
   *                "state":<boolen>,
   *                "approve_url":<boolen>,
   *                "disaprove_url":<boolen>,
   *            }
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
   *     }' 'https://kong.portalfinance.co/workflow/ok2pay/<workflow_id>/task/<task_name>/approve
   */

   /**
   * @api {post} /workflow/ok2pay/<workflow_id>/task/<task_name>/disapprove Disapprove OK2pay Task
   * @apiDescription Disapprove OK2pay Task (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName PostDisapporveOK2payTask
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} workflow_id Workflow Id.
   * @apiParam {String} task_name Task Name.
   * 
   * @apiParamExample {json} Request Body Example:
   *      {}
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} group_name Group name.
   * @apiSuccess {String} task_id Task Id.
   * @apiSuccess {String} task_name Task Name.
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "workflow_id":<string>,
   *           "tasks": [
   *            {
   *                "name":<string>,
   *                "state":<boolen>,
   *                "approve_url":<boolen>,
   *                "disaprove_url":<boolen>,
   *            },
   *            {
   *                "name":<string>,
   *                "state":<boolen>,
   *                "approve_url":<boolen>,
   *                "disaprove_url":<boolen>,
   *            },
   *            {
   *                "name":<string>,
   *                "state":<boolen>,
   *                "approve_url":<boolen>,
   *                "disaprove_url":<boolen>,
   *            }
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
   *     }' 'https://kong.portalfinance.co/workflow/ok2pay/<workflow_id>/task/<task_name>/disapprove
   */
  
  /**
   * @api {put} /ok2pay/groups/members?member_id=<string> Update OK2pay Group by member
   * @apiDescription Update OK2pay group (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName PutOK2payGroupbyMember
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} group_id Member id.
   * 
   * @apiParamExample {json} Request Body Example:
   *      {
   *           "group_id":<string>
   *      }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {Object} members Members Array Object.
   * @apiSuccess {Object} members.member Member Array Object.
   * @apiSuccess {String} members.member.entity_id  Member Entity id.
   * @apiSuccess {String} members.member.entity_tax_number  Member Entity tax number.
   * @apiSuccess {String} members.member.entity_name Member Entity name.
   * @apiSuccess {Object[]} members.tasks Member's tasks Array Object.
   * @apiSuccess {String} members.tasks.task_id Member's Task id.
   * @apiSuccess {String} members.tasks.task_name Member's Task Name.
   * @apiSuccess {Boolean} members.tasks.task_value Member's Task value.
   * @apiSuccess {Number} members.available_amount Available amount.
   * @apiSuccess {Object} members.ok2pay_group Member's OK2pay Array Object.
   * @apiSuccess {String} members.ok2pay_group.group_id Member's OK2pay  Group id.
   * @apiSuccess {String} members.ok2pay_group.group_name Member's OK2pay Group name.
   * 
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        "member": {
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
   *      }
   *    }
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
   *     curl -XPUT -d '{
   *           "group_id":<string>
   *     }' 'https://kong.portalfinance.co/ok2pay/groups/members?member_id=<string>
   */