'use strict';
(function() {

  class RestaurantPageComponent {
    constructor($scope) {
      $scope.message = 'Hello';

      $scope.coordinates = [43.461892, -79.686994];

      $scope.imageUrl = 'assets/images/restaurant-overview.jpg';
      $scope.imagetest = {'background-image': "url(\"" + $scope.imageUrl + "\")"};

      $scope.addressLine1 = "240 Leighland Avenue";
      $scope.addressLine2 = "Oakville Ontario";
      $scope.addressLine3 = "Canada";
      $scope.phone = "289 291-0265"
      $scope.website = "oliverbonacini.com"
      $scope.websiteLink = "http://" + $scope.website + ".com";
    }
  }

  angular.module('restaurantBookingApp')
    .component('restaurantPage', {
      templateUrl: 'app/restaurant-page/restaurant-page.html',
      controller: RestaurantPageComponent
    });

})();
