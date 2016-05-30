'use strict';

describe('Component: RestaurantOffersComponent', function () {

  // load the controller's module
  beforeEach(module('restaurantBookingApp'));

  var RestaurantOffersComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    RestaurantOffersComponent = $componentController('RestaurantOffersComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
