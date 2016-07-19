'use strict';

angular.module('restaurantBookingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('search', {
        url: '/search/:location/:cuisine',
        template: '<search></search>'
      });
  });
