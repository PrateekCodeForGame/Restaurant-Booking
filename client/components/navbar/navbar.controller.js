'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, $scope, Restaurant, $state) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    $scope.cuisines = Restaurant.cuisines;
    $scope.location = "";
    $scope.selectedCuisine = "";

    $scope.gotoSignup = function() {
      $state.go('signup');
    };

    $scope.search = function() {
      var l = $scope.location;
      var c = $scope.selectedCuisine;
      var r = $scope.restaurantName;
      if (l == "") {
        l = "All";
      };
      if (c == "") {
        c = "All";
      };
      if (r == "") {
        r = "All";
      };
      $state.go("search", {restaurant: r, location: l, cuisine: c});
    }
  }
}

angular.module('restaurantBookingApp')
  .controller('NavbarController', NavbarController);
