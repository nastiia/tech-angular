(function () {
    var module = angular.module('myApp', [
        'ng',
        'ngRoute',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',

        'ui.router',
        'ui.select'
    ]);

    module.controller('myAppGlobalCtrl', ['$scope', '$state', function ($scope, $state) {
        console.log('STARTED');
        $scope.test = 'TEST';
        $scope.$state = $state;
    }]);

    module.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider.state('root', {
            url: '/',
            views: {
                'content': {
                    //controller: 'pcViewsEfPochRedController',
                    templateUrl: 'assets/js/views/root.tpl.html'
                    //template: 'test-template'
                }
            },
            data: {
                title: 'Это проперти'
            }
        });

        $stateProvider.state('x1', {
            url: '/x1',
            views: {
                content: {
                    //controller: 'pcViewsEfPochRedController',
                    //templateUrl: '',
                    template: 'test-template x1'
                }
            },
            data: {
                title: 'Это проперти x1'
            }
        });
    }])
})();
