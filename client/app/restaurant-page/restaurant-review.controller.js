'use strict';
(function(){

class RestaurantReviewComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('restaurantBookingApp')
  .component('restaurantReview', {
    templateUrl: 'app/restaurant-page/restaurant-review.html',
    controller: RestaurantReviewComponent
  });

})();
