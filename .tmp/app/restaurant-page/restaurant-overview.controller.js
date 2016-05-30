'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RestaurantOverviewComponent = function RestaurantOverviewComponent($scope) {
    _classCallCheck(this, RestaurantOverviewComponent);

    $scope.imageUrl = ["restaurant.jpg", "restaurant-overview.jpg", "restaurant.jpg", "homePageImage.png", "restaurant.jpg"];
    $scope.mainImage = $scope.imageUrl[0];

    $scope.number = 3;
    $scope.getNumber = function () {
      var num = $scope.imageUrl.length;
      if (num > 5) {
        num = 5;
      }
      return new Array(num - 1);
    };
  };

  angular.module('restaurantBookingApp').component('restaurantOverview', {
    templateUrl: 'app/restaurant-page/restaurant-overview.html',
    controller: RestaurantOverviewComponent
  });
})();
//# sourceMappingURL=restaurant-overview.controller.js.map
