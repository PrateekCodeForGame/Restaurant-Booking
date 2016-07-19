'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, Restaurant, $state) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      $scope.searchKeyword = "";
      if(Restaurant.restaurants.length == 0) {
        $http({
          url: "/api/restaurants",
          method: "GET",
        }).then(function(response) {
          $scope.mainRestaurants = response.data;
        });
      }
      else {
        $scope.mainRestaurants = Restaurant.restaurants;
      };

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('thing');
      });

      $scope.options = {
        ratedFill: '#FBD033',
        readOnly: true,
        halfStar: false,
        fullStar: false,
        starWidth: "20px"
      };

      $scope.rating = 4.5;
      $scope.usersRated = 60;

      $scope.imageUrl = "assets/images/restaurant.jpg";
      $scope.starDealPrice = 22;
      $scope.starDeal = "Steak, fries & a glass of Rioja for £22 per person"
      $scope.cityImages =["stockholm.jpg", "goteborg.jpg", "malmo.jpg", "lulea.jpg"];

      $scope.showView = "hidden";
      $scope.dimDisplay = "";

      $scope.findRestaurant = function() {
        if($scope.searchKeyword == "") {
          $scope.searchKeyword = "All";
        }
        $state.go("search", {location: $scope.searchKeyword, cuisine: "All"});
      };
    }
  }

  angular.module('restaurantBookingApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
