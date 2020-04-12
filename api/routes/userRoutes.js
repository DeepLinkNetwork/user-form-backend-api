"use strict"
module.exports = function(app) {
    var userList = require("../controllers/userListController");

    var bodyParser = require("body-parser");

    var urlencodedParser = bodyParser.urlencoded({
        extended: false
    });

    app
        .route("/v1/json/user/:userHash")
        .get(userList.listUserFormsByUserHash)

    app
        .route("/v1/json/user/")
        .post(userList.listUserFormsByUserHash_post)

    app
        .route("/v1/json/user/create")
        .post(urlencodedParser, userList.create_a_user)
}
