var express = require('express');
var router = express.Router();

const _ = require('lodash');
/* GET users listing. */


router.get('/data', function(req, res, next) {

  res.send({sha:process.env.sha,
     branch: process.env.branch,
     repo:process.env.repo});
});


module.exports = router;
