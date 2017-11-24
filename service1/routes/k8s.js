var express = require('express');
var router = express.Router();
const Kubemote = require('kubemote');
const _ = require('lodash');
/* GET users listing. */
let kube;
try{
kube= new Kubemote();
}catch(e){
  console.log(e);
}

let config = {};
_.defaults(config, {health:true})
router.post('/config', (req, res)=>{
  let options = req.body();
  config.health = option.health;
})
router.get('/health', function(req, res, next) {
  console.log('test api');
  res.send(config.health);
});
router.get('/deployments/:deployment', function(req, res, next) {
  console.log('deployments');
  kube.getDeployments().then((deploy)=>{
    return res.send(deploy)
  })

});
router.get('/services/:service', function(req, res, next) {
  kube.getServices().then((services)=>{
    return res.send(services)
  })
});
router.get('/pods/:pod', function(req, res, next) {
  kube.getPods().then((pods)=>{
    return res.send(pods)
  })
});


module.exports = router;
