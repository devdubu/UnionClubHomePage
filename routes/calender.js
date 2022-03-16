var express = require('express');
var db = require('../modules/db');
var router = express.Router();

/* GET /mobile */
router.get('/', function(req, res) {
    res.render('calender');
  });

module.exports = router;

