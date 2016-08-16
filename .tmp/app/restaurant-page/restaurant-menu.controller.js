'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RestaurantMenuComponent = function RestaurantMenuComponent($scope, Restaurant) {
    _classCallCheck(this, RestaurantMenuComponent);

    $scope.items = Restaurant.selectedRestaurant.items;
    $scope.price = Restaurant.selectedRestaurant.price;
  };

  angular.module('restaurantBookingApp').component('restaurantMenu', {
    templateUrl: 'app/restaurant-page/restaurant-menu.html',
    controller: RestaurantMenuComponent
  });
})();
//# sourceMappingURL=restaurant-menu.controller.js.map
