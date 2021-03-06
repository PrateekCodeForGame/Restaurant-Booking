'use strict';

var express = require('express');
var controller = require('./restaurant.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/owner/:owner', controller.showOwnerWise);
router.get('/find/:name', controller.showRestaurant);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
