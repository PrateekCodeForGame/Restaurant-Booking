'use strict';

describe('Component: RestaurantReviewComponent', function () {

  // load the controller's module
  beforeEach(module('restaurantBookingApp'));

  var RestaurantReviewComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    RestaurantReviewComponent = $componentController('RestaurantReviewComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
