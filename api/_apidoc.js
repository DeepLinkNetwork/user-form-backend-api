/**
 * @api {get} /v1/json/user/:userHash GET - List user forms
 * @apiVersion 1.0.0
 * @apiGroup List_User_Forms
 * @apiSuccess {String} _id Unique ID of user
 * @apiSuccess {String} name Full name of user
 * @apiSuccess {String} dob User's date of birth
 * @apiSuccess {String} email Email of user
 * @apiSuccess {Number} contact User phone number
 * @apiSuccess {String} userHash User browser fingerprint
 * @apiSuccess {String} submitDate User form submit date
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * Connection: keep-alive
 *
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {post} /v1/json/user/  POST - List user forms
 * @apiVersion 1.0.0
 * @apiGroup List_User_Forms
 * @apiParamExample x-www-form-urlencoded Input
 *    {
 *        "userHash": "5a925bb92c8bcf5455832e6a"
 *    }
 * @apiSuccess {String} _id Unique ID of user
 * @apiSuccess {String} name Full name of user
 * @apiSuccess {String} dob User's date of birth
 * @apiSuccess {String} email Email of user
 * @apiSuccess {Number} contact User phone number
 * @apiSuccess {String} userHash User browser fingerprint
 * @apiSuccess {String} submitDate User form submit date
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"173-OvDDCHVWK9WN0mOUbfca6iskYQY"
 * Connection: keep-alive
 *
 * {
 *    "_id": "5e925dc51d0cff5a8ce256d8",
 *   "name": "Test User",
 *    "dob": "1989-04-11T22:45:44.000Z",
 *    "email": "testuser@gmail.com",
 *   "contact": 9876543210,
 *    "userHash": "d476d512eb1bec563c134871156044bf",
 *    "submitDate": "Sun Apr 12 1988 02:16:44 GMT+0530 (India Standard Time)"
 * }
 * 
 * 
 * @apiErrorExample {json}  Not Found or Bad Request
 *    HTTP/1.1 400 Bad Request
 */

/**
 * @api {post} /v1/json/user/create POST - Create new user
 * @apiVersion 1.0.0
 * @apiSampleRequest off
 * @apiGroup Create New User
 * @apiParamExample x-www-form-urlencoded Input
 *  {
 *     "name": "Test User",
 *     "dob": "19-03-1998",
 *     "email": "dchoudhary@gmail.com",
 *     "contact": 9876543210,
 *     "userHash": "d476d512eb1bec563c134871156044bf"
 *     "submitDate": "Sun Apr 12 1988 02:16:44 GMT+0530 (India Standard Time)"
 *     "x64signature": "47b26d3e482d36f6d6b6388188c266e3"
 *  }
 *
 * @apiSuccess {String} message Success message
 * @apiSuccess {String} _id Unique ID of user
 * @apiSuccess {String} name Full name of user
 * @apiSuccess {String} dob User's date of birth
 * @apiSuccess {String} email Email of user
 * @apiSuccess {Number} contact User phone number
 * @apiSuccess {String} userHash User browser fingerprint
 * @apiSuccess {String} submitDate User form submit date
 * @apiSuccess {String} x64signature User fingerprint client signature
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * X-Powered-By: Express
 * Access-Control-Allow-Origin: *
 * Access-Control-Allow-Methods: GET, POST, PUT, DELETE
 * Access-Control-Allow-Headers: X-Requested-With,content-type
 * Access-Control-Allow-Credentials: true
 * X-RateLimit-Limit: 35
 * X-RateLimit-Remaining: 34
 * ETag: W/"173-OvDDCHVWK9WN0mOUbfca6iskYQY"
 * Connection: keep-alive
 *
 *
 * @apiErrorExample {json} User Create error
 *    HTTP/1.1 400 Bad Request
 */
