var mongoose = require("mongoose")

var userData = mongoose.Schema(
    {
        name: {
            type: String
        },
        dob: {
            type: String
        },
        email: {
            type: String
        },
        contact: {
            type: Number
        },
        userHash: {
            type: String
        },
        submitDate: {
            type: String
        }
    },
    { versionKey: false }
)

module.exports = userData;
