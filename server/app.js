/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';

// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) {
  require('./config/seed');
}

// Setup server
var app = express();
var server = http.createServer(app);
var socketio = require('socket.io')(server, {
  serveClient: config.env !== 'production',
  path: '/socket.io-client'
});
require('./config/socketio').default(socketio);
require('./config/express').default(app);
require('./routes').default(app);
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './assets/img/');
  },
  filename: function(req, file, cb) {
    console.log(".........sadsa.", file);
    cb(null, file.originalname + '-' + Date.now() + '.jpg');
  }
});
var upload = multer({
  storage: storage
});

app.post('/api/upload', upload.array('images'), function(req, res, next) {
  console.log("..", req.body) // this contains all text data
  console.log(".......", req.files) // this is always an empty array
  var response = {
    status: 200,
    success: req.files
  }

  res.end(JSON.stringify(response));
});

// Start server
function startServer() {
  app.angularFullstack = server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}

setImmediate(startServer);

// Expose app
exports = module.exports = app;
