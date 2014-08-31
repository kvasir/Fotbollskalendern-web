'use strict';

describe('Controller: MatchctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('fotbollskalendernWebApp'));

  var MatchctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MatchctrlCtrl = $controller('MatchctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
