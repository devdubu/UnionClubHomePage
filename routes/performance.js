var express = require('express');
var router = express.Router();

/* GET /performance */
router.get('/', function(req, res) {
  res.render('secondlist');
});

module.exports = router;
