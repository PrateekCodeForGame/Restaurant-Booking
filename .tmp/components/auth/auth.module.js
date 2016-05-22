'use strict';

angular.module('restaurantBookingApp.auth', ['restaurantBookingApp.constants', 'restaurantBookingApp.util', 'ngCookies', 'ui.router']).config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
//# sourceMappingURL=auth.module.js.map
