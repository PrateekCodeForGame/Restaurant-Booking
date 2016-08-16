'use strict';
(function() {

  class RestaurantOverviewComponent {
    constructor($scope, Restaurant, $http) {
      if(Restaurant.selectedRestaurant) {
        $scope.imageUrl = Restaurant.selectedRestaurant.images;
        $scope.mainImage = $scope.imageUrl[0];
        $scope.summary = Restaurant.selectedRestaurant.summary;
      }
      else {
        $http({
          url: "/api/restaurants/" + Restaurant.selectedId,
          method: "GET",
        }).then(function(response) {
          $scope.imageUrl = response.data.images;
          $scope.mainImage = $scope.imageUrl[0];
          $scope.summary = response.data.summary;
        });
      };

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
