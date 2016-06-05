'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var MainController = function MainController($http, $scope, socket) {
    _classCallCheck(this, MainController);

    this.$http = $http;
    this.socket = socket;
    this.awesomeThings = [];

    $scope.$on('$destroy', function () {
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

    $scope.mainRestaurants = [1, 2, 3, 4];
    $scope.imageUrl = "assets/images/restaurant.jpg";
    $scope.starDealPrice = 22;
    $scope.starDeal = "Steak, fries & a glass of Rioja for £22 per person";
    $scope.cityImages = ["stockholm.jpg", "goteborg.jpg", "malmo.jpg", "lulea.jpg"];

    $scope.countries = ["Afghanistan", "Pakistan", "India", "fghanistan", "Pakstan", "Idia", "Afghanitan", "Pastan", "dia"];

    $scope.showView = "hidden";
    $scope.dimDisplay = "";
  };

  angular.module('restaurantBookingApp').component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
})();
//# sourceMappingURL=main.controller.js.map
