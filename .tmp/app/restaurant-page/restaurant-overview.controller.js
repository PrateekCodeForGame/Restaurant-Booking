'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RestaurantOverviewComponent = function RestaurantOverviewComponent() {
    _classCallCheck(this, RestaurantOverviewComponent);

    this.message = 'Hello';
  };

  angular.module('restaurantBookingApp').component('restaurantOverview', {
    templateUrl: 'app/restaurant-page/restaurant-overview.html',
    controller: RestaurantOverviewComponent
  });
})();
//# sourceMappingURL=restaurant-overview.controller.js.map
