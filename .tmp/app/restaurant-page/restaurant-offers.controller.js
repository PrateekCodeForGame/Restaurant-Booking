'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RestaurantOffersComponent = function RestaurantOffersComponent($scope) {
    _classCallCheck(this, RestaurantOffersComponent);

    $scope.images = ["offer1.jpg", "offer2.jpg", "offer3.jpg", "offer4.jpg"];
  };

  angular.module('restaurantBookingApp').component('restaurantOffers', {
    templateUrl: 'app/restaurant-page/restaurant-offers.html',
    controller: RestaurantOffersComponent
  });
})();
//# sourceMappingURL=restaurant-offers.controller.js.map
