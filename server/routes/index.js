var express = require('express');
var router = express.Router();

const mongoDB = require('../bin/mongoDB');

/* GET home page. */
router.get('/1', function(req, res, next) {
  res.send(200,'connected');
});

module.exports = router;
