/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/restaurants              ->  index
 * POST    /api/restaurants              ->  create
 * GET     /api/restaurants/:id          ->  show
 * PUT     /api/restaurants/:id          ->  update
 * DELETE  /api/restaurants/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Restaurant from './restaurant.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Restaurants
export function index(req, res) {
  return Restaurant.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Restaurant from the DB
export function show(req, res) {
  return Restaurant.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Restaurant by owner
export function showOwnerWise(req, res) {
  return Restaurant.findOne({owner: req.params.owner}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Implement like command for restaurants
export function showRestaurant(req, res) {
  var searchPhrase = req.params.name;
  var regularExpression = new RegExp(".*" + searchPhrase + ".*");
  return Restaurant.find({"restaurantName": regularExpression}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Restaurant in the DB
export function create(req, res) {
  return Restaurant.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Restaurant in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Restaurant.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Restaurant from the DB
export function destroy(req, res) {
  return Restaurant.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
