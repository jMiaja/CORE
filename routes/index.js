var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;


router.get('/creditos',function(req,res,next) {
    res.render('creditos');
});
