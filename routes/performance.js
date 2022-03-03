var express = require('express');
var router = express.Router();

/* GET /performance */
router.get('/', function(req, res) {
  db.get().collection('performance').find().toArray(function(err, resu) {
      console.log(resu);
      res.render('list', {data : resu});
  });
});

module.exports = router;
