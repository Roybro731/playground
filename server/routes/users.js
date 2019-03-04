const express = require('express');
const router = express.Router();

const mongoDB = require('../bin/mongoDB');

function returnResponse(err, result, res) {
  const status = err? 500: 200;
  const resultToSend = err? err: result
  res.status(status).send(resultToSend); 
}

/* GET home page. */
router.get('/find', function(req, res, next) {
  mongoDB.findUser({"name":"a12"}, (err, result) => {
    returnResponse(err, result, res);
  });
});

router.put('/insert', function(req, res, next) {
  mongoDB.insertUser({"name":"a12"}, (err, result) => {
    returnResponse(err, result, res);
  });
});

router.delete('/deleteOne', function(req, res, next){
  mongoDB.deleteOneUser({"name":"a12"}, (err, result) => {
    returnResponse(err, result, res);
  });
});

router.delete('/deleteAll', function(req, res, next){
  mongoDB.deleteAllUsers((err, result) => {
    returnResponse(err, result, res);
  });
});

module.exports = router;
