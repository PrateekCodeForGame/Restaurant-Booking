'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RestaurantReviewComponent = function RestaurantReviewComponent() {
    _classCallCheck(this, RestaurantReviewComponent);

    this.message = 'Hello';
  };

  angular.module('restaurantBookingApp').component('restaurantReview', {
    templateUrl: 'app/restaurant-page/restaurant-review.html',
    controller: RestaurantReviewComponent
  });
})();
//# sourceMappingURL=restaurant-review.controller.js.map
