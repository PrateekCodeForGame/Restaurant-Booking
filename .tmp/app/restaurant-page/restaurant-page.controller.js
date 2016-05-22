'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RestaurantPageComponent = function RestaurantPageComponent($scope) {
    _classCallCheck(this, RestaurantPageComponent);

    $scope.message = 'Hello';

    $scope.coordinates = [43.461892, -79.686994];

    $scope.imageUrl = 'assets/images/restaurant-overview.jpg';
    $scope.imagetest = {
      'background-image': "url(\"" + $scope.imageUrl + "\")"
    };

    $scope.addressLine1 = "240 Leighland Avenue";
    $scope.addressLine2 = "Oakville Ontario";
    $scope.addressLine3 = "Canada";
    $scope.phone = "289 291-0265";
    $scope.website = "oliverbonacini.com";
    $scope.websiteLink = "http://" + $scope.website + ".com";

    $scope.datePopup = {
      opened: false
    };
    $scope.dateOptions = {
      formatYear: 'yy',
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    $scope.format = 'dd-MMMM-yyyy';
    $scope.openDatePicker = function () {
      $scope.datePopup.opened = true;
    };
  };

  angular.module('restaurantBookingApp').component('restaurantPage', {
    templateUrl: 'app/restaurant-page/restaurant-page.html',
    controller: RestaurantPageComponent
  });
})();
//# sourceMappingURL=restaurant-page.controller.js.map
