var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


const app = express();

const routes = require('./routes');
const service =  (!process.env.service) ? "1" : process.env.service
const appversion = process.env.appversion;
const port = 3000;
const router = require('./routes');
 

/* GET users listing. */

app.listen(port, (err)=>{
  console.log(`listending on port ${port}`)
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(logger('dev'));
app.use(router);
app.use('/kube',(req, res)=>{
  console.log('/kube route');
  return res.send(200);
});
app.get('/mongo', (req, res , next)=>{
  connectToMongo().then(()=>{
    res.send('connected');
  }, (err)=>{
    console.log(err);
    res.send(401, err);
  })
})
app.use((req, res)=>{
  res.send(`[${appversion}] service ${service}:${appversion} is avaiable!`)
});

let connectToMongo = ()=>{
  const  MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

  return new Promise((yes, no)=>{


  // Connection URL
  var url = 'mongodb://release1-mongodb:27017/myproject';
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    //assert.equal(null, err);

    (!err)  ? (()=>{
      console.log("Connected correctly to mongo server");
      (db) ? db.close() : db;
      yes (db);
    })() : no(err)
  });
})
}
