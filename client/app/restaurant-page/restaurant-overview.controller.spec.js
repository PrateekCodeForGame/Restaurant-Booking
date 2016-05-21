'use strict';

describe('Component: RestaurantOverviewComponent', function () {

  // load the controller's module
  beforeEach(module('restaurantBookingApp'));

  var RestaurantOverviewComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    RestaurantOverviewComponent = $componentController('RestaurantOverviewComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
