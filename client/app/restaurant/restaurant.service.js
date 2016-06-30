'use strict';

angular.module('restaurantBookingApp')
  .factory('restaurant', function ($http) {
    var factory = {};
    factory.restaurants = [];
    $http({
      url: "/api/restaurants",
      method: "GET",
    }).then(function(response) {
      factory.restaurants = response.data;
    });


    factory.getAllRestaurants = function() {
      $http({
        url: "/api/restaurants",
        method: "GET",
      }).then(function(response) {
        factory.restaurants = response.data;
        console.log(".............................", factory);
        return factory;
      });
    };

    return factory;
  });
