var express = require("express");

var router = express.Router();

var burger = require('../models/burgers');

// Cotroller => model => orm => connection.js => SQL database

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(result) {
        res.render("index", { burgers: result });
    });
});

router.post("/api/burgers", function(req, res) {
    burgers.create([
        "name", "veggie"
    ], [
        req.body.name, req.body.sleepy
    ], function(result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.update({
        veggie: req.body.veggie
    }, condition, function(result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    cat.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;