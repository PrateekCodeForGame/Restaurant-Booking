'use strict';

angular.module('restaurantBookingApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('restaurant-page', {
        url: '/restaurant-page',
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
      });
  });
