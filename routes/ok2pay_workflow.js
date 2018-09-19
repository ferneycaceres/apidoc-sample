var express = require('express');
var router = express.Router();

/**
   @api {get} /ok2pay/risk-groups?page_number=<integer>&page_limit=<integer>&search=<string>&sort_by=<string>&type=<string> [Financial] List OK2pay Financial Groups

   * @apiDescription Get OK2pay Risk Groups (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName GETOk2payRiskroups
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
   * @apiSuccess {Object[]} requeriments Requeriments Array Object.
   * @apiSuccess {String} requeriments.id Requeriment Id.
   * @apiSuccess {String} requeriments.name Requeriment Name.
   * @apiSuccess {Object[]} approvals Approvals Array Object.
   * @apiSuccess {String} approvals.id Approval Id.
   * @apiSuccess {String} approvals.name Approval Name.
   * @apiSuccess {Object[]} groups OK2Pay Groups Array Object.
   * @apiSuccess {String} groups.id Group id.
   * @apiSuccess {String} groups.group_name Group name.
   * @apiSuccess {Object[]} groups.tasks Task Array Object.
   * @apiSuccess {String} groups.tasks.id  Task id.
   * @apiSuccess {String} groups.tasks.name  Task name.
   * @apiSuccess {Boolean} groups.tasks.value  Task value.
   * @apiSuccess {Object[]} groups.approvals Approvals Array Object.
   * @apiSuccess {String} groups.approvals.id Approvals id.
   * @apiSuccess {String} groups.approvals.name Approvals name.
   * @apiSuccess {String} groups.approvals.show Show approval dropdown.
   * @apiSuccess {Object[]} groups.approvals.executives Executives name.
   * @apiSuccess {String} groups.approvals.executives.executive_id Executive id.
   * @apiSuccess {String} groups.approvals.executives.executive_name Executive name.
   * @apiSuccess {String} groups.approvals.executives.selected True if executive is selected otherwise is False.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   *    "requeriments":[
   *     {
   *       "id":<string>,
   *       "name":<string>
   *     },
   *     {
   *       "id":<string>,
   *       "name":<string>
   *     },
   *     {
   *       "id":<string>,
   *       "name":<string>
   *     },
   *     {
   *       "id":<string>,
   *       "name":<string>
   *     }
   *    "approvals":[
   *     {
   *       "id":<string>,
   *       "name":<string>
   *     },
   *     {
   *       "id":<string>,
   *       "name":<string>
   *     },
   *     {
   *       "id":<string>,
   *       "name":<string>
   *     }
   *    ],
   *    "groups":[
   *    {
   *       "group_id":<string>,
   *       "group_name":<string>,
   *       "tasks":[
   *        {
   *            "id":<string>,
   *            "name":<string>,
   *            "value":<boolean>
   *        },
   *        {
   *            "id":<string>,
   *            "name":<string>,
   *            "value":<boolean>
   *        },
   *        {
   *            "id":<string>,
   *            "name":<string>,
   *            "value":<boolean>
   *        },
   *        {
   *            "id":<string>,
   *            "name":<string>,
   *            "value":<boolean>
   *        }
   *       ],
   *       "approvals":[
   *        {
   *            "id":<string>,
   *            "name":<string>,
   *            "show":<boolean>,
   *            "executives":[
   *            {
   *               "executive_id":<string>,
   *               "executive_name":<string>,
   *               "selected":<boolean>
   *            },
   *            {
   *               "executive_id":<string>,
   *               "executive_name":<string>,
   *               "selected":<boolean>
   *            }
   *            ]
   *        }
   *       ]
   *    }
   *    ]
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
   *          -X POST https://kong.portalfinance.co/ok2pay/risk-groups?page_number=<integer>&page_limit=<integer>&search=<string>&sort_by=<string>&type=<string>
   */

   /**
   * @api {put} /ok2pay/risk-groups/group_id=<string> [Financial] Update Risk OK2pay Group
   * @apiDescription Update OK2pay Risk group (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName PutOK2payRiskGroup
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} group_name Group name.
   * @apiParam {Object[]} tasks Tasks.
   * @apiParam {String} tasks.task_id Task Name.
   * @apiParam {Boolean} tasks.task_value Task value.
   * @apiParam {Object[]} approvals Approvals.
   * @apiParam {String} approvals.id Approval id.
   * @apiParam {String} approvals.executive_id Executive Selected.
   * 
   * @apiParamExample {json} Request Body Example:
   *      {
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
   *           "approvals":[
   *           {
   *              "id":<string>,
   *              "executive_id":<string>
   *           },
   *           {
   *              "id":<string>,
   *              "executive_id":<string>
   *           }
   *           ]
   *     }
   * 
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} group_id Group id.
   * @apiSuccess {String} group_name Group name.
   * @apiSuccess {String} task_id Task Id.
   * @apiSuccess {String} task_name Task Name.
   * 
   * @apiParam {String} group_name Group name.
   * @apiParam {Object[]} tasks Tasks.
   * @apiParam {String} tasks.task_id Task Name.
   * @apiParam {String} tasks.task_value Task value.
   * @apiParam {Object[]} approvals Approvals.
   * @apiParam {String} approvals.id Approval id.
   * @apiParam {String} approvals.executive_id Executive Selected.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *           "group_id":<string>,
   *           "group_name":<string>,
   *           "tasks": [
   *            {
   *                "id":<string>,
   *                "value":<boolen>
   *            },
   *            {
   *                "id":<string>,
   *                "value":<boolen>
   *            },
   *            {
   *                "id":<string>,
   *                "value":<boolen>
   *            }
   *           ],
   *           "approvals":[
   *           {
   *              "id":<string>,
   *              "executive_id":<string>
   *           },
   *           {
   *              "id":<string>,
   *              "executive_id":<string>
   *           }
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
   *           "group_id":<string>,
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
   *            },
   *           "approvals":[
   *           {
   *              "id":<string>,
   *              "executive_id":<string>
   *           },
   *           {
   *              "id":<string>,
   *              "executive_id":<string>
   *           }
   *           ]
   *     }' 'https://kong.portalfinance.co/ok2pay/risk-groups/group_id=<string>
   */

   /**
   @api {get} /ok2pay/transactions?page_number=<integer>&page_limit=<integer>&search=<string>&sort_by=<string>&type=<string> [Financial] List of pending transactions to approve by executive

   * @apiDescription Get List of pending transactions to approve by executive
   * @apiVersion 1.0.0
   * @apiName GETOk2payPendingTransactions
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
   * @apiSuccess {String} context_id Context id.
   * @apiSuccess {String} offer_id Offer Id.
   * @apiSuccess {String} offer_num Offer Number.
   * @apiSuccess {String} offer_amount Group Object.
   * @apiSuccess {String} supplier_name Supplier name.
   * @apiSuccess {String} supplier_tin Supplier Tax number.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * [
   *    {
   *      "context_id":<string>,
   *      "offer_id":<string>,
   *      "offer_num":<string>,
   *      "offer_amount":<number>,
   *      "supplier_name":<string>,
   *      "supplier_tin":<string>
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
   *          -X GET https://kong.portalfinance.co/ok2pay/transactions?page_number=<integer>&page_limit=<integer>&search=<string>&sort_by=<string>&type=<string>
   */

   /**
   @api {get} /ok2pay/context/<string> [Financial] Context Detail by Executive

   * @apiDescription Get Context to validate tasks required (Executive User Partner)
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
   * @apiSuccess {String} offer.offer_due_date Offer Due date.
   * @apiSuccess {String} offer.fixed_commission Offer Fixed Commission.
   * @apiSuccess {String} offer.variable_commission Offer Variable Commission.
   * @apiSuccess {String} offer.transactions_expenses Offer Transations Expenses.
   * @apiSuccess {Object[]} workflow  Workflow Array Object.
   * @apiSuccess {String} workflow.id  Workflow id.
   * @apiSuccess {Object} workflow.available_actions Object. 
   * @apiSuccess {String} workflow.available_actions.state State. 
   * @apiSuccess {String} workflow.available_actions.type Type.
   * @apiSuccess {String} workflow.available_actions.front_end_element FE element.
   * @apiSuccess {String} workflow.available_actions.approve Approve url.
   * @apiSuccess {String} workflow.available_actions.disapprove Disapprove url.
   * @apiSuccess {String} workflow.available_actions.details_url Details url.
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * [
   *    {
   *      "context_id":<string>,
   *      "offer":{
   *        "offer_number":<string>,
   *        "offer_amount":<number>,
   *        "issue_date":<date>,
   *        "due_date":<date>,
   *        "fixed_commission":<number>,
   *        "variable_commission":<number>,
   *        "transactions_expenses":<number>
   *      },
   *      "workflow":{
   *             "id":<string>
   *             "available_actions":[
   *                "state":<string>,
   *                "type": <string>,
   *                "front_end_element":<string>,
   *                "approve":<string>,
   *                "disapprove":<string>,
   *                "details_url":<string>
   *             ]
   *        }
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
   *          -X GET https://kong.portalfinance.co/ok2pay/context/<string>
   */

   /**
   @api {get} /previred-summary/<TIN> [Financial] Previred - Payrolls summary 

   * @apiDescription Get Previred - Payrolls summary 
   * @apiVersion 1.0.0
   * @apiName GETOk2payPayrollSummary
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
   * @apiSuccess {String} supplier_name Supplier name. 
   * @apiSuccess {String} supplier_tin Supplier Tax Number. 
   * @apiSuccess {Date} last_payroll_payment Last payroll payment.
   * @apiSuccess {Number} last_payroll_payment_amount Last payroll .
   * @apiSuccess {Number} average_payroll_payment Average payroll payment.
   * @apiSuccess {Number} employees_number Employees number .
   * @apiSuccess {Number} average_employees_num Average employees number.
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * [
   *    {
   *      "supplier_name":<string>,
   *      "supplier_tin":<string>,
   *      "last_payroll_payment":<date>,
   *      "last_payroll_payment_amount":<number>,
   *      "average_payroll_payment":<number>,
   *      "employees_number":<number>,
   *      "average_employees_num":<number>
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
   *          -X GET https://kong.portalfinance.co/previred-summary/<TIN>
   */

   /**
   @api {get} /offers/purchase-orders/<offer_id> [Financial] Purchase Orders List   

   * @apiDescription Get Purchase Orders List 
   * @apiVersion 1.0.0
   * @apiName GETOk2payPurchaseOrders
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
   * @apiSuccess {Object} offer Offer Object. 
   * @apiSuccess {String} offer.offer_id Offer Id. 
   * @apiSuccess {String} offer.offer_num Offer Number. 
   * @apiSuccess {Number} offer.offer_amount Offer Amount. 
   * @apiSuccess {Date} offer.issue_date Offer Issue Date. 
   * @apiSuccess {String} offer.num_invoices Offer Number of invoices. 
   * @apiSuccess {String} offer.fixed_commission Fixed Commision. 
   * @apiSuccess {String} offer.variable_commision Variable Commission. 
   * @apiSuccess {String} offer.transaction_expenses Transaction Expenses. 
   * @apiSuccess {Object[]} invoices Invoices Array Object.
   * @apiSuccess {String} invoices.invoice_id Invoice id.
   * @apiSuccess {String} invoices.invoice_num Invoice number.
   * @apiSuccess {String} invoices.debtor_name Debtor_name.
   * @apiSuccess {String} invoices.debtor_tin Invoice Debtor tin.
   * @apiSuccess {Date} invoices.issue_date Invoice Issue date.
   * @apiSuccess {Date} invoices.due_date Invoice Due date.
   * @apiSuccess {Boolean} invoices.po_document_available Document Available.
   * @apiSuccess {String} invoices.po_document_url Document URL.
   * 
   * 
   * @apiSuccessExample Success-Response:
   * HTTP/1.1 200 OK
   * [
   *    {
   *      "offer":{
   *        "offer_id":<string>,
   *        "offer_num":<string>,
   *        "offer_amount":<number>,
   *        "issue_date":<date>,
   *        "num_invoices":<number>,
   *        "fixed_commission":<number>,
   *        "variable_commision":<number>,
   *        "transaction_expenses":<number>
   *        "invoices":[
   *        {
   *            "invoice_id":<string>,
   *            "invoice_num":<string>,
   *            "debtor_name":<string>,
   *            "debtor_tin":<string>
   *            "issue_date":<date>,
   *            "due_date":<date>
   *            "po_document_available":<boolean>,
   *            "po_document_url":<string>
   *        }
   *        ]
   *      },
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
   *          -X GET https://kong.portalfinance.co/offers/purchase-orders/<offer_id>
   */

   /**
   * @api {post} /workflow/ok2pay/<workflow_id>/task/<task_id>/approve [Financial] Approve OK2Pay task
   * @apiDescription Approve OK2pay Task (Admin User Financial Institution)
   * @apiVersion 1.0.0
   * @apiName PostApproveOK2payTask
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} workflow_id Workflow Id.
   * @apiParam {String} task_id Task Id.
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
   * @api {post} /workflow/ok2pay/<workflow_id>/task/<task_id>/disapprove [Financial] Disapprove OK2pay Task
   * @apiDescription Disapprove OK2pay Task (Admin User Partner)
   * @apiVersion 1.0.0
   * @apiName PostDisapporveOK2payTask
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} workflow_id Workflow Id.
   * @apiParam {String} task_id Task Name.
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