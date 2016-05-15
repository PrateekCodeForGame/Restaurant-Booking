'use strict';

(function() {

  class MainController {

    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.awesomeThings = [];

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

      $scope.countries = ["Afghanistan", "Pakistan", "India", "fghanistan", "Pakstan", "Idia", "Afghanitan", "Pastan", "dia"];
    }
  }

  angular.module('restaurantBookingApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();