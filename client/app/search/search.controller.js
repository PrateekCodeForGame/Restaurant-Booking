'use strict';
(function(){

class SearchComponent {
  constructor($scope, $state, $stateParams, Restaurant) {
    $scope.restaurants = [];
    $scope.setAllData = function(data) {
      $scope.restaurants = data;
      console.log("..............", $scope.restaurants);
      $scope.options = {
        ratedFill: '#FBD033',
        readOnly: true,
        halfStar: false,
        fullStar: false,
        starWidth: "20px"
      };

      $scope.rating = 5;
    };
    
    if (Restaurant.restaurants.length == 0) {
      Restaurant.getAllRestaurants().then(function(response){
        $scope.setAllData(response);
      });
    }
    else {
      $scope.setAllData(Restaurant.restaurants);
    };

    $scope.gotoRestaurant = function(res) {
      $state.go("restaurant-page", {restaurantId: res._id});
    };
  }
}

angular.module('restaurantBookingApp')
  .component('search', {
    templateUrl: 'app/search/search.html',
    controller: SearchComponent
  });

})();
