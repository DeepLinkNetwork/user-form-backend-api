"use strict"

// [START app]
require('dotenv').config();
const express = require("express");
const app = express();

var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var RateLimit = require("express-rate-limit");

var mongoURI = process.env.MONGOURI || require("./config/dbconfig").MONGOURI;
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST")
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type")
    res.setHeader("Access-Control-Allow-Credentials", true)
    next()
});

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html")
});

var apiLimiter = new RateLimit({
    windowMs: 60000,
    max: 15,
    delayMs: 0
});

app.use("/v1/", apiLimiter);

const routes = require("./api/routes/userRoutes");
routes(app);

app.use(function(req, res) {
    res
        .status(404)
        .send({ error: "Requested url `" + req.originalUrl + "` not found" })
});

// Starting the server
const PORT = process.env.PORT || 8099
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
    console.log("Press Ctrl+C to quit.")
})

// [END app]
