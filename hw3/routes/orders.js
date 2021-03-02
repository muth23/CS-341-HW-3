// Adrian Muth

var express = require('express');
var router = express.Router();

// Sample JSON array
var orderData = {"data": [{"topping":"cherry", "quantity":"2"},
    {"topping":"plain", "quantity":"6"},
    {"topping":"chocolate", "quantity":"3"}]};

// Display array
router.post("/", function(req, res, next) {res.jsonp(orderData);})

module.exports = router;
