'use strict';
(function() {

  class RestaurantPageComponent {
    constructor($scope, $state, Restaurant, $stateParams) {
      Restaurant.find($stateParams.restaurantId).then(function(response) {
        $scope.restaurantName = response.restaurantName;

        $scope.coordinates = response.location;

        $scope.imageUrl = "assets/images/" + response.headerImage[0];
        $scope.imagetest = {
          'background-image': "url(\"" + $scope.imageUrl + "\")",
          '-webkit-filter': "brightness(0.4)",
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

        $scope.addressLine1 = response.addressLine1;
        $scope.addressLine2 = response.addressLine2;
        $scope.addressLine3 = response.city;
        $scope.phone = response.phone;
        $scope.website = response.website;
        $scope.websiteLink = "http://" + $scope.website + ".com";

        $scope.tableFor = [1, 2, 3, 4, 5, 6];
        $scope.timings = ["4:00pm", "5:00pm", "6:00pm", "7:00pm", "8:00pm", "9:00pm"];
        $scope.days = [{
          day: "Mandag",
          time: response.openTimings,
        }, {
          day: "Tisdag",
          time: response.openTimings,
        }, {
          day: "Onsdag",
          time: response.openTimings,
        }, {
          day: "Torsdag",
          time: response.openTimings,
        }, {
          day: "Fredag",
          time: response.openTimings,
        }, {
          day: "Lordag",
          time: response.openTimings,
        }, {
          day: "Sondag",
          time: response.openTimings,
        }];

        $state.go("restaurant-page.restaurant-overview");
      });

      $scope.tabs = {'Overview': "", 'Menu': "", 'Reviews': "", 'Offers': ""};
      $scope.selectedTab = function(selected) {
        $scope.tabs = {'Overview': "", 'Menu': "", 'Reviews': "", 'Offers': ""};
        $scope.tabs[selected] = "selectedTabs";
      };

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
      $scope.openDatePicker = function() {
        $scope.datePopup.opened = true;
      };

    }
  }

  angular.module('restaurantBookingApp')
    .component('restaurantPage', {
      templateUrl: 'app/restaurant-page/restaurant-page.html',
      controller: RestaurantPageComponent
    });

})();
