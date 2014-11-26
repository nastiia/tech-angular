(function () {
    var module = angular.module('img1', [
        'ng',
        'ngRoute',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',

        'ui.router',
        'ui.select'
    ]);

    module.controller('img1Ctrl', ['$scope', '$stateParams', function ($scope, $stateParams) {
        console.log('img1 started');
        $scope.$stateParams = $stateParams;
    }]);

})();
