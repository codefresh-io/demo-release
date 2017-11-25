var express = require('express');
var router = express.Router();
//const k8s = require('./k8s')
const commit = require('./commit')
/* GET home page. */
//router.use('/k8', k8s);
router.use('/commit', commit);
module.exports = router
