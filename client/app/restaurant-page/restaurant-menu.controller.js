'use strict';
(function(){

class RestaurantMenuComponent {
  constructor($scope, Restaurant) {
    $scope.items = Restaurant.selectedRestaurant.items;
    $scope.price = Restaurant.selectedRestaurant.price;
  }
}

angular.module('restaurantBookingApp')
  .component('restaurantMenu', {
    templateUrl: 'app/restaurant-page/restaurant-menu.html',
    controller: RestaurantMenuComponent
  });

})();
