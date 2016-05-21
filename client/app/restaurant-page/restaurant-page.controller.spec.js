'use strict';

describe('Component: RestaurantPageComponent', function () {

  // load the controller's module
  beforeEach(module('restaurantBookingApp'));

  var RestaurantPageComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    RestaurantPageComponent = $componentController('RestaurantPageComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
