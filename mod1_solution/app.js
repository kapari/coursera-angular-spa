(function () {
    'use strict';

    angular.module('LunchCheck', [])
           .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.lunchMenu = "";
        $scope.lunchMessage = "";
        $scope.countItems = function(cleanMenu) {
            var itemList = cleanMenu.split(',');
            var counter = 0;
            for (var i=0; i<itemList.length; i++) {
                if (itemList[i] !== "") {
                    // console.log("a real item:" + itemList[i]);
                    counter ++;
                }
            }
            return counter;
        };
        $scope.checkIfTooMuch = function () {
            var cleanMenu = $scope.lunchMenu.replace(/\s+/g, '');
            // console.log("clean menu:" + cleanMenu);
            if (cleanMenu === "") {
                $scope.lunchMessage = "Please enter data first";
            } else {
                var numberOfItems = $scope.countItems(cleanMenu);
                if (numberOfItems <= 3) {
                    $scope.lunchMessage = "Enjoy!";
                } else {
                    $scope.lunchMessage = "Too much!";
                }
            }
        };
    }

})();
