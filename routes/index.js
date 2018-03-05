var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const obj = {
    title: 'ExpressWeb'
  }
  res.render('index', obj);
});

module.exports = router;
