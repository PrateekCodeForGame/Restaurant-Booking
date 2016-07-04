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
      $http({
        url: "/api/restaurants/owner/" + $scope.owner,
        method: "GET",
      }).then(function(response) {
        $scope.restaurant = response.data;
        $scope.restaurantDetails = "Update Restaurant";
      });

      $scope.restaurantAdded = function() {
        if ($scope.restaurantPresent == '0') {
          return true;
        };
        return false;
      };
      $scope.addNew = function() {
        $scope.restaurantPresent = 1;
      };
      $scope.saveRestaurant = function() {
        $scope.restaurant["owner"] = $scope.owner
        $http({
          url: "/api/restaurants",
          method: "POST",
          data: $scope.restaurant
        }).then(function(response) {
          // console.log("...............................................", response);
        });
      };

      // Image upload

      var uploadUrl = '/api/upload';
      var images;

      $scope.uploadFiles = function(files, errFiles) {
        images = files;
        $scope.startUpload();
        console.log("..............", images);
      };

      $scope.startUpload = function() {
        var filenames = [];
        var data = {
          title: 'test title',
          images: images
        };

        Upload.upload({
          url: uploadUrl,
          arrayKey: '',
          data: data,
        }).then(function(response){
          angular.forEach(response.data.success, function(value){
            filenames.push(value.filename);
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
