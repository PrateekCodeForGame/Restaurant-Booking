'use strict';

angular.module('restaurantBookingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search/:location/:restaurantName',
        template: '<search></search>'
      });
  });
