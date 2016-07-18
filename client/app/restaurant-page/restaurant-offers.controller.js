'use strict';
(function(){

class RestaurantOffersComponent {
  constructor($scope, Restaurant) {
    $scope.images = Restaurant.selectedRestaurant.offerImages;
  }
}

angular.module('restaurantBookingApp')
  .component('restaurantOffers', {
    templateUrl: 'app/restaurant-page/restaurant-offers.html',
    controller: RestaurantOffersComponent
  });

})();
