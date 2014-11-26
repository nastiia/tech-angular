(function () {
    var module = angular.module('img2', [
        'ng',
        'ngRoute',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',

        'ui.router',
        'ui.select'
    ]);

    module.controller('img2Ctrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
        console.log('img2 started');
        $scope.$stateParams = $stateParams;
    }]);

})();
