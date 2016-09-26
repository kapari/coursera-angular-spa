(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
  $scope.name = "Yaakov";
  $scope.sayHello = function () {
    return "Hello Coursera!";
  };
});

})();
