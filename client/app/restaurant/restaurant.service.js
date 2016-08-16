'use strict';

angular.module('restaurantBookingApp')
  .factory('Restaurant', function ($http, $q) {
    var factory = {};
    factory.restaurants = [];
    factory.cuisines = [
      "Grekiskt",
      "Havets lackerheter",
      "Husmankost",
      "Indiskt",
      "Italienskt",
      "Japansk",
      "Kafe",
      "Kinesiskt",
      "Mexikanskt",
      "Spanskt",
      "Sydamerikanskt",
      "Thailandskt",
      "Vegetariskt",
    ];
    factory.locations = [
      "Goteborg",
      "Lulea",
      "Stockholm",
      "Malmo"
    ];
    factory.selectedRestaurant = {};
    factory.selectedId = "";
    $http({
      url: "/api/restaurants",
      method: "GET",
    }).then(function(response) {
      factory.restaurants = response.data;
    });

    factory.getAllRestaurants = function() {
      var deferred = $q.defer();
      $http({
        url: "/api/restaurants",
        method: "GET",
      }).then(function(response) {
        factory.restaurants = response.data;
        deferred.resolve(factory.restaurants);
      });

      return deferred.promise;
    };

    factory.find = function(id) {
      factory.selectedId = id;
      var deferred = $q.defer();
      $http({
        url: "/api/restaurants/" + id,
        method: "GET",
      }).then(function(response) {
        factory.selectedRestaurant = {};
        factory.selectedRestaurant = response.data;
        deferred.resolve(factory.selectedRestaurant);
      });

      return deferred.promise;
    }

    return factory;
  });
