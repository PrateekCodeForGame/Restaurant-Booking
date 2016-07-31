'use strict';
(function() {

  class SearchComponent {
    constructor($scope, $state, $stateParams, Restaurant, $http) {
      $scope.restaurants = [];
      $scope.filteredRestaurants = [];
      $scope.locationFilter = [];
      $scope.cuisineFilter = [];
      $scope.locations = {
        "Goteborg": false,
        "Lulea": false,
        "Stockholm": false,
        "Malmo": false
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
        } else {
          var index = $scope.locationFilter.indexOf(key);
          $scope.locationFilter.splice(index, 1);
        };
        $scope.applyFilters();
      };
      $scope.changeCuisineFilter = function(key, value) {
        if (value == true) {
          $scope.cuisineFilter.push(key);
        } else {
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
        } else {
          angular.forEach($scope.restaurants, function(value) {
            angular.forEach($scope.locationFilter, function(filter) {
              if (value.city.toLowerCase() == filter.toLowerCase()) {
                $scope.tempFilteredRestaurants.push(value);
              }
            });
          });
        };
        if ($scope.cuisineFilter.length == 0) {
          $scope.filteredRestaurants = $scope.tempFilteredRestaurants;
        } else {
          angular.forEach($scope.tempFilteredRestaurants, function(value) {
            angular.forEach($scope.cuisineFilter, function(filter) {
              if (value.cuisine.toLowerCase() == filter.toLowerCase()) {
                $scope.filteredRestaurants.push(value);
              }
            });
          });
        };
      };

      $scope.setAllData = function(data) {
        $scope.restaurants = data;
        if ($stateParams.location != "All") {
          $scope.locations[$stateParams.location.charAt(0).toUpperCase() + $stateParams.location.slice(1)] = true;
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

      $scope.setData = function() {
        if (Restaurant.restaurants.length == 0) {
          Restaurant.getAllRestaurants().then(function(response) {
            $scope.setAllData(response);
          });
        } else {
          $scope.setAllData(Restaurant.restaurants);
        };
      };

      if($stateParams.restaurant != "All") {
        $http({
          url: "/api/restaurants/find/" + $stateParams.restaurant,
          method: "GET",
        }).then(function(response) {
          $scope.setAllData(response.data);
        }, function() {
          $scope.setData();
        });
      }else {
        $scope.setData();
      };

      $scope.gotoRestaurant = function(res) {
        $state.go("restaurant-page", {
          restaurantId: res._id
        });
      };
    }
  }

  angular.module('restaurantBookingApp')
    .component('search', {
      templateUrl: 'app/search/search.html',
      controller: SearchComponent
    });

})();
