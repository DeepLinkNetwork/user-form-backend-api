define({ "api": [
  {
    "type": "post",
    "url": "/v1/json/user/create",
    "title": "POST - Create new user",
    "version": "1.0.0",
    "group": "Create_New_User",
    "parameter": {
      "examples": [
        {
          "title": "x-www-form-urlencoded Input",
          "content": "{\n   \"name\": \"Test User\",\n   \"dob\": \"19-03-1998\",\n   \"email\": \"dchoudhary@gmail.com\",\n   \"contact\": 9876543210,\n   \"userHash\": \"d476d512eb1bec563c134871156044bf\"\n   \"submitDate\": \"Sun Apr 12 1988 02:16:44 GMT+0530 (India Standard Time)\"\n   \"x64signature\": \"47b26d3e482d36f6d6b6388188c266e3\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>User's date of birth</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "contact",
            "description": "<p>User phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userHash",
            "description": "<p>User browser fingerprint</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "submitDate",
            "description": "<p>User form submit date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "x64signature",
            "description": "<p>User fingerprint client signature</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"173-OvDDCHVWK9WN0mOUbfca6iskYQY\"\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "User Create error",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "Create_New_User",
    "name": "PostV1JsonUserCreate"
  },
  {
    "type": "get",
    "url": "/v1/json/user/:userHash",
    "title": "GET - List user forms",
    "version": "1.0.0",
    "group": "List_User_Forms",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>User's date of birth</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "contact",
            "description": "<p>User phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userHash",
            "description": "<p>User browser fingerprint</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "submitDate",
            "description": "<p>User form submit date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nConnection: keep-alive",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "List_User_Forms",
    "name": "GetV1JsonUserUserhash",
    "sampleRequest": [
      {
        "url": "https://user-form-backend.herokuapp.com/v1/json/user/:userHash"
      }
    ]
  },
  {
    "type": "post",
    "url": "/v1/json/user/",
    "title": "POST - List user forms",
    "version": "1.0.0",
    "group": "List_User_Forms",
    "parameter": {
      "examples": [
        {
          "title": "x-www-form-urlencoded Input",
          "content": "{\n    \"userHash\": \"5a925bb92c8bcf5455832e6a\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": "<p>Unique ID of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Full name of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "dob",
            "description": "<p>User's date of birth</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "contact",
            "description": "<p>User phone number</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userHash",
            "description": "<p>User browser fingerprint</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "submitDate",
            "description": "<p>User form submit date</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\nX-Powered-By: Express\nAccess-Control-Allow-Origin: *\nAccess-Control-Allow-Methods: GET, POST, PUT, DELETE\nAccess-Control-Allow-Headers: X-Requested-With,content-type\nAccess-Control-Allow-Credentials: true\nX-RateLimit-Limit: 35\nX-RateLimit-Remaining: 34\nETag: W/\"173-OvDDCHVWK9WN0mOUbfca6iskYQY\"\nConnection: keep-alive\n\n{\n   \"_id\": \"5e925dc51d0cff5a8ce256d8\",\n  \"name\": \"Test User\",\n   \"dob\": \"1989-04-11T22:45:44.000Z\",\n   \"email\": \"testuser@gmail.com\",\n  \"contact\": 9876543210,\n   \"userHash\": \"d476d512eb1bec563c134871156044bf\",\n   \"submitDate\": \"Sun Apr 12 1988 02:16:44 GMT+0530 (India Standard Time)\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Not Found or Bad Request",
          "content": "HTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "filename": "api/_apidoc.js",
    "groupTitle": "List_User_Forms",
    "name": "PostV1JsonUser",
    "sampleRequest": [
      {
        "url": "https://user-form-backend.herokuapp.com/v1/json/user/"
      }
    ]
  }
] });
