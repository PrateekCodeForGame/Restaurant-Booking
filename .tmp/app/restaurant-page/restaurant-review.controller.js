'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var RestaurantReviewComponent = function RestaurantReviewComponent($scope) {
    _classCallCheck(this, RestaurantReviewComponent);

    $scope.options = {
      ratedFill: '#FBD033',
      readOnly: true,
      halfStar: false,
      fullStar: false,
      starWidth: "20px"
    };

    $scope.rating = 4.5;
    $scope.peopleRated = 10;

    $scope.sortType = ["Date", "Review"];

    $scope.name = "Adam Pickering";
    $scope.time = "1 year ago";
    $scope.kvalitetRating = 4.5;
    $scope.serviceRating = 5;
    $scope.prisvartRating = 5;
    $scope.review = "What a lovely place. The environment and the crowd was really very awesome. Was awestruck by the beauty of the place. The waiters were very friendly and the drinks suggested were also very good. The food also didn't disappoint at all. Overall great experience and a must visit place.";

    $scope.reviews = new Array(5);
  };

  angular.module('restaurantBookingApp').component('restaurantReview', {
    templateUrl: 'app/restaurant-page/restaurant-review.html',
    controller: RestaurantReviewComponent
  });
})();
//# sourceMappingURL=restaurant-review.controller.js.map
