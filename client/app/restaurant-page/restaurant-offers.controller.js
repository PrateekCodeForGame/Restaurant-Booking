'use strict';
(function(){

class RestaurantOffersComponent {
  constructor($scope) {
    $scope.images = ["offer1.jpg", "offer2.jpg", "offer3.jpg", "offer4.jpg"];
  }
}

angular.module('restaurantBookingApp')
  .component('restaurantOffers', {
    templateUrl: 'app/restaurant-page/restaurant-offers.html',
    controller: RestaurantOffersComponent
  });

})();
