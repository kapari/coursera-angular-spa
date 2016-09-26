(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.lunchList = "";
  $scope.lunchMessage = "";
  $scope.checkIfTooMuch = function () {
    return "Test";
  };
});

})();
