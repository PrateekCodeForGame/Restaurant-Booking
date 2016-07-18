'use strict';

(function() {

  class AdminController {
    constructor(User, Auth, $scope, $http, Upload) {
      // Use the User $resource to fetch all users
      this.users = User.query();
      this.getCurrentUser = Auth.getCurrentUser;
      $scope.owner = this.getCurrentUser().email;
      $scope.restaurant = {};
      $scope.restaurantDetails = "Add new Restaurant";
      $scope.latitude = "";
      $scope.longitude = "";
      $http({
        url: "/api/restaurants/owner/" + $scope.owner,
        method: "GET",
      }).then(function(response) {
        $scope.restaurant = response.data;
        $scope.latitude = response.data.location[0];
        $scope.longitude = response.data.location[1];
        $scope.restaurantDetails = "Update Restaurant";
      });

      $scope.saveRestaurant = function() {
        $scope.restaurant["owner"] = $scope.owner;
        $scope.restaurant["location"] = [];
        $scope.restaurant["location"].push($scope.latitude);
        $scope.restaurant["location"].push($scope.longitude);
        console.log("....................", $scope.restaurant);
        if($scope.restaurantDetails == "Add new Restaurant") {
          $http({
            url: "/api/restaurants",
            method: "POST",
            data: $scope.restaurant
          }).then(function(response) {
          });
        }
        else {
          $http({
            url: "/api/restaurants/" + $scope.restaurant._id,
            method: "DELETE",
            data: $scope.restaurant
          }).then(function(response) {
            $http({
              url: "/api/restaurants",
              method: "POST",
              data: $scope.restaurant
            }).then(function(response) {
            });
          });
        }
      };

      // Image upload

      var uploadUrl = '/api/upload';
      var images;

      $scope.uploadHeaderFiles = function(files, errFiles) {
        images = files;
        var data = {
          title: 'test title',
          images: images
        };
        Upload.upload({
          url: uploadUrl,
          arrayKey: '',
          data: data,
        }).then(function(response) {
          angular.forEach(response.data.success, function(value) {
            $scope.restaurant["headerImage"] = (value.filename);
          });
        });
      };

      $scope.uploadImageFiles = function(files, errFiles) {
        images = files;
        var data = {
          title: 'test title',
          images: images
        };
        Upload.upload({
          url: uploadUrl,
          arrayKey: '',
          data: data,
        }).then(function(response) {
          angular.forEach(response.data.success, function(value) {
            if(!$scope.restaurant["images"]) {
              $scope.restaurant["images"] = [];
            }
            $scope.restaurant["images"].push(value.filename);
          });
        });
      };

      $scope.uploadOfferFiles = function(files, errFiles) {
        images = files;
        var data = {
          title: 'test title',
          images: images
        };
        Upload.upload({
          url: uploadUrl,
          arrayKey: '',
          data: data,
        }).then(function(response) {
          angular.forEach(response.data.success, function(value) {
            if(!$scope.restaurant["offerImages"]) {
              $scope.restaurant["offerImages"] = [];
            }
            $scope.restaurant["offerImages"].push(value.filename);
          });
        });
      };

    }

    delete(user) {
      user.$remove();
      this.users.splice(this.users.indexOf(user), 1);
    }
  }

  angular.module('restaurantBookingApp.admin')
    .controller('AdminController', AdminController);

})();
