'use strict';
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var FormEntry = require('./model/formEntry.js');
var app = express();
var router = express.Router();

var port = process.env.API_PORT || 3001;

//db config
mongoose.connect('mongodb://user:password@ds121889.mlab.com:21889/reactformchallenge');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

app.use('/api', router);

router.route('/entry')
  .get(function(req, res) {
    FormEntry.find(function(err, formEntry) {
      if (err)
        res.send(err);
      res.json(formEntry)
    });
  })
  .post(function(req, res) {
    var entry = new FormEntry();
    entry.name = req.body.name;
    entry.company = req.body.company;
    entry.tos = req.body.tos;
    entry.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Entry successfully added!' });
    });
  });

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
