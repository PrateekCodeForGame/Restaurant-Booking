'use strict';

angular.module('restaurantBookingApp', ['restaurantBookingApp.auth', 'restaurantBookingApp.admin', 'restaurantBookingApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap', 'validation.match', 'rateYo', 'ui.select2', 'ngMap']).config(function ($urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map
