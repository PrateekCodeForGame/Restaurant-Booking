'use strict';

angular.module('restaurantBookingApp', [
  'restaurantBookingApp.auth',
  'restaurantBookingApp.admin',
  'restaurantBookingApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
