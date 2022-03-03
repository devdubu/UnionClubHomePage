var express = require('express');
const { rawListeners } = require('../app');
var db = require('../modules/db');
var router = express.Router();

/* DELETE /delete */
router.delete('/', function(req, res) {
    console.log(req.body.category);

    req.body._id = parseInt(req.body._id);
    db.get().collection(req.body.category).deleteOne(req.body, function(ree, resu) {
        console.log('삭제완료');
        res.status(200).send({message: '성공했습니다.'});
    });
});

module.exports = router;

