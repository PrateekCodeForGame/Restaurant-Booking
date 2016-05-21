'use strict';
(function() {

  class RestaurantPageComponent {
    constructor($scope) {
      $scope.message = 'Hello';

      $scope.coordinates = [12.9716, 77.5946];

      $scope.imageUrl = 'assets/images/restaurant-overview.jpg';
      $scope.imagetest = {'background-image': "url(\"" + $scope.imageUrl + "\")"};
    }
  }

  angular.module('restaurantBookingApp')
    .component('restaurantPage', {
      templateUrl: 'app/restaurant-page/restaurant-page.html',
      controller: RestaurantPageComponent
    });

})();
