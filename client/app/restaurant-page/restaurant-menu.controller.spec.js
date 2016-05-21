'use strict';

describe('Component: RestaurantMenuComponent', function () {

  // load the controller's module
  beforeEach(module('restaurantBookingApp'));

  var RestaurantMenuComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    RestaurantMenuComponent = $componentController('RestaurantMenuComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
