var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* GET /question */
router.get('/', function(req, res) {
    res.render('secondlist');
});

module.exports = router;