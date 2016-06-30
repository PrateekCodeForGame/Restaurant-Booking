'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket, restaurant) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];
      if(restaurant.restaurants.length == 0) {
        $http({
          url: "/api/restaurants",
          method: "GET",
        }).then(function(response) {
          $scope.mainRestaurants = response.data;
        });
      }
      else {
        $scope.mainRestaurants = restaurant.restaurants;
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

      $scope.countries = ["Afghanistan", "Pakistan", "India", "fghanistan", "Pakstan", "Idia", "Afghanitan", "Pastan", "dia"];

      $scope.showView = "hidden";
      $scope.dimDisplay = "";
    }
  }

  angular.module('restaurantBookingApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
