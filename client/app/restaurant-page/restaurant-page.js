'use strict';

angular.module('restaurantBookingApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('restaurant-page', {
        url: '/restaurant-page/:restaurantId',
        template: '<restaurant-page></restaurant-page>'
      })

    .state('restaurant-page.restaurant-overview', {
      url: '/restaurant-overview',
      template: '<restaurant-overview></restaurant-overview>'
    })

    .state('restaurant-page.restaurant-menu', {
      url: '/restaurant-menu',
      template: '<restaurant-menu></restaurant-menu>'
    })

    .state('restaurant-page.restaurant-review', {
      url: '/restaurant-review',
      template: '<restaurant-review></restaurant-review>'
    })

    .state('restaurant-page.restaurant-offers', {
      url: '/restaurant-offers',
      template: '<restaurant-offers></restaurant-offers>'
    });
  });
