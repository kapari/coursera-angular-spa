(function () {
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchMenu = "";
        $scope.lunchMessage = "";
        $scope.countItems = function() {
            var itemList = $scope.lunchMenu.split(',');
            console.log(itemList);
            return itemList.length;
        };
        $scope.checkIfTooMuch = function () {
            var cleanMenu = $scope.lunchMenu.replace(/\s+/g, '');
            console.log(cleanMenu);
            if (cleanMenu === "") {
                $scope.lunchMessage = "Please enter data first";
            } else {
                var numberOfItems = $scope.countItems();
                console.log(numberOfItems);

                if (numberOfItems <= 3) {
                    $scope.lunchMessage = "Enjoy!";
                } else {
                    $scope.lunchMessage = "Too much!";
                }
            }
        };
    }

})();
