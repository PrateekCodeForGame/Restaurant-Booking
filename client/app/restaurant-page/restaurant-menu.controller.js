'use strict';
(function(){

class RestaurantMenuComponent {
  constructor($scope) {
    $scope.message = 'Hello';
  }
}

angular.module('restaurantBookingApp')
  .component('restaurantMenu', {
    templateUrl: 'app/restaurant-page/restaurant-menu.html',
    controller: RestaurantMenuComponent
  });

})();
