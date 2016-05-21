'use strict';
(function(){

class RestaurantOverviewComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('restaurantBookingApp')
  .component('restaurantOverview', {
    templateUrl: 'app/restaurant-page/restaurant-overview.html',
    controller: RestaurantOverviewComponent
  });

})();
