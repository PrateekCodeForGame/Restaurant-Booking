'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RestaurantPageComponent = function RestaurantPageComponent($scope) {
    _classCallCheck(this, RestaurantPageComponent);

    $scope.message = 'Hello';

    $scope.restaurantName = "Oliver & Bonacini Cafe Grill";

    $scope.coordinates = [43.461892, -79.686994];

    $scope.imageUrl = 'assets/images/restaurant-overview.jpg';
    $scope.imagetest = {
      'background-image': "url(\"" + $scope.imageUrl + "\")",
      '-webkit-filter': "brightness(0.4)"
    };

    $scope.tabs = { 'Overview': "", 'Menu': "", 'Reviews': "", 'Offers': "" };
    $scope.selectedTab = function (selected) {
      $scope.tabs = { 'Overview': "", 'Menu': "", 'Reviews': "", 'Offers': "" };
      $scope.tabs[selected] = "selectedTabs";
    };

    $scope.options = {
      ratedFill: '#FBD033',
      readOnly: true,
      halfStar: false,
      fullStar: false,
      starWidth: "20px"
    };

    $scope.rating = 5;
    $scope.peopleRated = 10;

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

    $scope.tableFor = [1, 2, 3, 4, 5, 6];
    $scope.timings = ["4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm"];
    $scope.days = [{
      day: "Mandag",
      time: "11:00am - 10:00pm"
    }, {
      day: "Tisdag",
      time: "11:00am - 10:00pm"
    }, {
      day: "Onsdag",
      time: "11:00am - 10:00pm"
    }, {
      day: "Torsdag",
      time: "11:00am - 10:00pm"
    }, {
      day: "Fredag",
      time: "11:00am - 10:00pm"
    }, {
      day: "Lordag",
      time: "11:00am - 10:00pm"
    }, {
      day: "Sondag",
      time: "11:00am - 10:00pm"
    }];
  };

  angular.module('restaurantBookingApp').component('restaurantPage', {
    templateUrl: 'app/restaurant-page/restaurant-page.html',
    controller: RestaurantPageComponent
  });
})();
//# sourceMappingURL=restaurant-page.controller.js.map
