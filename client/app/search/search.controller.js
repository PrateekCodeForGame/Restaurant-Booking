'use strict';
(function(){

class SearchComponent {
  constructor($scope, $state, $stateParams, Restaurant) {
    $scope.restaurants = [];
    $scope.filteredRestaurants = [];
    $scope.locationFilter = [];
    $scope.cuisineFilter = [];
    $scope.locations = {
      "Goteburg": false,
      "Lulea": false,
      "Stockholm": false,
    };
    $scope.cuisines = {
      "Grekiskt": false,
      "Havets lackerheter": false,
      "Husmankost": false,
      "Indiskt": false,
      "Italienskt": false,
      "Japansk": false,
      "Kafe": false,
      "Kinesiskt": false,
      "Mexikanskt": false,
      "Spanskt": false,
      "Sydamerikanskt": false,
      "Thailandskt": false,
      "Vegetariskt": false,
    };

    $scope.changeLocationFilter = function(key, value) {
      if (value == true) {
        $scope.locationFilter.push(key);
      }
      else {
        var index = $scope.locationFilter.indexOf(key);
        $scope.locationFilter.splice(index, 1);
      };
      $scope.applyFilters();
    };
    $scope.changeCuisineFilter = function(key, value) {
      if (value == true) {
        $scope.cuisineFilter.push(key);
      }
      else {
        var index = $scope.cuisineFilter.indexOf(key);
        $scope.cuisineFilter.splice(index, 1);
      };
      $scope.applyFilters();
    };
    $scope.applyFilters = function() {
      $scope.tempFilteredRestaurants = [];
      $scope.filteredRestaurants = [];
      if ($scope.locationFilter.length == 0) {
        $scope.tempFilteredRestaurants = $scope.restaurants;
      }
      else {
        angular.forEach($scope.restaurants, function(value) {
          angular.forEach($scope.locationFilter, function(filter) {
            if (value.city == filter) {
              $scope.tempFilteredRestaurants.push(value);
            }
          });
        });
      };
      if ($scope.cuisineFilter.length == 0) {
        $scope.filteredRestaurants = $scope.tempFilteredRestaurants;
      }
      else {
        angular.forEach($scope.tempFilteredRestaurants, function(value) {
          angular.forEach($scope.cuisineFilter, function(filter) {
            if (value.cuisine == filter) {
              $scope.filteredRestaurants.push(value);
            }
          });
        });
      };
    };

    $scope.setAllData = function(data) {
      $scope.restaurants = data;
      if ($stateParams.location != "All") {
        $scope.locations[$stateParams.location] = true;
        $scope.locationFilter.push($stateParams.location);
      }
      if ($stateParams.cuisine != "All") {
        $scope.cuisines[$stateParams.cuisine] = true;
        $scope.cuisineFilter.push($stateParams.cuisine);
      }
      $scope.applyFilters();
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
