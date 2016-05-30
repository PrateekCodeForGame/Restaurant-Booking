'use strict';
(function() {

  class RestaurantOverviewComponent {
    constructor($scope) {
      $scope.imageUrl = ["restaurant.jpg", "restaurant-overview.jpg", "restaurant.jpg", "homePageImage.png", "restaurant.jpg"];
      $scope.mainImage = $scope.imageUrl[0];

      $scope.number = 3;
      $scope.getNumber = function() {
        var num = $scope.imageUrl.length;
        if (num > 5) {
          num = 5;
        }
        return new Array(num-1);
      }
    }
  }

  angular.module('restaurantBookingApp')
    .component('restaurantOverview', {
      templateUrl: 'app/restaurant-page/restaurant-overview.html',
      controller: RestaurantOverviewComponent
    });

})();
