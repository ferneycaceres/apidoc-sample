var express = require('express');
var router = express.Router();

/**
   @api {get} /workflow/ok2pay/user/:user_id/state/:state  Get Transactions by executive user_id and state 

   * @apiDescription Get Transactions by executive user_id and state
   * @apiVersion 1.0.0
   * @apiName GETOffersByuser
   * @apiGroup OK2PayWorkflowAPI
   *
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} user_id Executive unique ID who has offers to approve.
   * @apiParam {String} state Offer state.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object[]} Offers  Offer Array Object.
   * @apiSuccess {String} Offers.uid Offer id.
   * @apiSuccess {String} Offers.offer_num  Offer number.
   * @apiSuccess {Object[]} Offers.pending_tasks Pending Tasks Array Object.
   * @apiSuccess {String} Offers.pending_tasks.task_id Task id.
   * @apiSuccess {String} Offers.pending_tasks.task_name Task Name.
   * @apiSuccess {String} Offers.pending_tasks.value Task Value true==done false==rejected and null==not_validated .
   * @apiSuccess {Date} Offers.pending_tasks.updated_at Updated at.
   * @apiSuccess {String} Offers.pending_tasks Updated by executive .
   * @apiSuccess {Object[]} Offers.tasks_done Tasks Array Object.
   * @apiSuccess {Object[]} Offers.tasks_done Pending Tasks Array Object.
   * @apiSuccess {String} Offers.tasks_done.task_id Task id.
   * @apiSuccess {String} Offers.tasks_done.task_name Task Name.
   * @apiSuccess {String} Offers.tasks_done.value Task Value true==done false==rejected and null==not_validated .
   * @apiSuccess {Date} Offers.tasks_done.updated_at Updated at.
   * @apiSuccess {String} Offers.tasks_done Updated by executive.
   * @apiSuccess {String} Offers.offer_status Offer Status.
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   * "offers":[
   *     {
   *         "id":"bb553dd2-628d-11e8-adc0-fa7ae01bbebc",
   *         "offer_num":"258",
   *         "pending_tasks":[
   *             {
   *                 "task_id":"1",
   *                 "task_name":"validate_pvr",
   *                 "value":null,
   *                 "updated_at":"",
   *                 "updated_by":null
   *             },
   *             {
   *                 "task_id":"2",
   *                 "task_name":"validate_po",
   *                 "value":"null",
   *                 "updated_at":"",
   *                 "updated_by":null   
   *             },
   *             {
   *                 "task_id":"3",
   *                 "task_name":"validate_offer",
   *                 "value":"null",
   *                 "updated_at":"",
   *                 "updated_by":null
   *             }
   *         ],
   *         "tasks_done":[],
   *         "offer_status":"Pending"
   *     },
   *     {
   *         "id":"702d0bea-628e-11e8-adc0-fa7ae01bbebc",
   *         "offer_num":"259",
   *         "pending_tasks":[
   *             {
   *                 "task_id":"1",
   *                 "task_name":"validate_pvr",
   *                 "value":null,
   *                 "updated_at":"",
   *                 "updated_by":null
   *             },
   *             {
   *                 "task_id":"3",
   *                 "task_name":"validate_offer",
   *                 "value":"null",
   *                 "updated_at":"",
   *                 "updated_by":null
   *             }
   *         ],
   *         "tasks_done":[
   *             {
   *                 "task_id":"2",
   *                 "task_name":"validate_po",
   *                 "value":true,
   *                 "updated_at":"2018/05/01 10:25:25",
   *                 "updated_by":"8e27bb40-628e-11e8-adc0-fa7ae01bbebc"   
   *             }
   *         ],
   *         "offer_status":"Pending"
   *     }
   *    ]
   *  }
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
   *          -X POST https://kong.portalfinance.co/workflow/ok2pay/user/:user_id/state/:state
   */

   /**
   @api {get} /workflow/ok2pay/offer/:uuid  Get Transactions by offer_id

   * @apiDescription Get Transactions by offer_id
   * @apiVersion 1.0.0
   * @apiName GETOffersByOfferId
   * @apiGroup OK2PayWorkflowAPI
   *
   *
   * @apiHeader {String} Authorization Token Http basic auth.
   * 
   * @apiParam {String} offer_id Offer unique ID to approve.
   * 
   * @apiHeaderExample {json} Request-Example:
   *              { "Content-Type": "application/json",
   *                "Authorization":"Bearer B1q2hUEKmeVp9zWepx9cnp"
   *              }
   *
   * @apiSuccess {Object[]} Offers  Offer Object.
   * @apiSuccess {String} Offers.uid Offer id.
   * @apiSuccess {String} Offers.offer_num  Offer number.
   * @apiSuccess {Object[]} Offers.pending_tasks Pending Tasks Array Object.
   * @apiSuccess {String} Offers.pending_tasks.task_id Task id.
   * @apiSuccess {String} Offers.pending_tasks.task_name Task Name.
   * @apiSuccess {String} Offers.pending_tasks.value Task Value true==done false==rejected and null==not_validated .
   * @apiSuccess {Date} Offers.pending_tasks.updated_at Updated at.
   * @apiSuccess {String} Offers.pending_tasks Updated by executive .
   * @apiSuccess {Object[]} Offers.tasks_done Tasks Array Object.
   * @apiSuccess {Object[]} Offers.tasks_done Pending Tasks Array Object.
   * @apiSuccess {String} Offers.tasks_done.task_id Task id.
   * @apiSuccess {String} Offers.tasks_done.task_name Task Name.
   * @apiSuccess {String} Offers.tasks_done.value Task Value true==done false==rejected and null==not_validated .
   * @apiSuccess {Date} Offers.tasks_done.updated_at Updated at.
   * @apiSuccess {String} Offers.tasks_done Updated by executive.
   * @apiSuccess {String} Offers.offer_status Offer Status.
   * 
   * 
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   * {
   * "offer":
   *     {
   *         "id":"bb553dd2-628d-11e8-adc0-fa7ae01bbebc",
   *         "offer_num":"258",
   *         "pending_tasks":[
   *             {
   *                 "task_id":"1",
   *                 "task_name":"validate_pvr",
   *                 "value":null,
   *                 "updated_at":"",
   *                 "updated_by":null
   *             },
   *             {
   *                 "task_id":"2",
   *                 "task_name":"validate_po",
   *                 "value":"null",
   *                 "updated_at":"",
   *                 "updated_by":null   
   *             },
   *             {
   *                 "task_id":"3",
   *                 "task_name":"validate_offer",
   *                 "value":"null",
   *                 "updated_at":"",
   *                 "updated_by":null
   *             }
   *         ],
   *         "tasks_done":[],
   *         "offer_status":"Pending"
   *  }
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
   *          -X POST https://kong.portalfinance.co/workflow/ok2pay/offer/:offer_id
   */


   /**
   * @api {post} /workflow/ok2pay/execute_task/ Execute task by executive
   * @apiDescription Upload Digital Certificates
   * @apiVersion 1.0.0
   * @apiName PostExecuteTask
   * @apiGroup OK2PayWorkflowAPI
   *
   * @apiPermission None
   * 
   * @apiParam {String} offer_id Offer Id.
   * @apiParam {String} task_id Task Id.
   * @apiParam {String} task_name Task Name.
   * @apiParam {String} value Value task.
   * @apiParam {String} update_by  Update by executive.
   * 
   * @apiParamExample {json} Request Body Example:
   *      {
   *           "offer_id":"0929aa4c-6294-11e8-adc0-fa7ae01bbebc"
   *           "task_id":"3",
   *           "task_name":"validate_offer",
   *           "value":true,
   *           "updated_by":"306358d6-d6ef-46b9-b32d-ec2e9c739373"
   *     }
   * @apiHeader {String} Authorization Http basic auth.
   *
   * @apiSuccess {String} offer_id  Offer id.
   * @apiSuccess {String} task_id Task Id.
   * @apiSuccess {String} task_name Task Name.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "offer_id":"0929aa4c-6294-11e8-adc0-fa7ae01bbebc"
   *          "task_id":"3",
   *          "task_name":"validate_offer"
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



   
  router.post('/:id', function(req, res, next) {
    res.json({'id' : req.params.id,
              'firstName' : 'John',
              'lastName' : 'John'});
  });
  
  module.exports = router;