(function () {
    var module = angular.module('myApp', [
        'ng',
        'ngRoute',
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngSanitize',

        'ui.router',
        'ui.select',

        'img1',
        'img2'
    ]);

    module.controller('myAppGlobalCtrl', ['$scope', '$state', 'UtilsFactory', function ($scope, $state, UtilsFactory) {
        console.log('STARTED');
        $scope.$state = $state;
        //if(!UtilsFactory.getLogged()) {
        //    $state.go('root');
        //}
        UtilsFactory.setLogged();
    }]);

    module.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/img1');

        $stateProvider.state('img1', {
            url: "/img1?comment",
            views: {
                'content': {
                    controller: 'img1Ctrl',
                    //template: '<h1>qwe</h1>',
                    templateUrl: 'assets/js/views/img1.tpl.html'
                }
            },
            data: {
                title: 'Пикассо'
            }
        });

        $stateProvider.state('img2', {
            url: "/img2/{ISDN}/",
            views: {
                'content': {
                    controller: 'img2Ctrl',
                    //template: '<h1>qwe</h1>',
                    templateUrl: 'assets/js/views/img2.tpl.html'
                }
            },
            data: {
                title: 'Ван ГОГ'
            }
        });
    }]);

    module.constant('CONSTANTA', 'http://amazon.com/');

    module.value('VALUE123', {
        subvalue1: 1,
        subvalue2: 2
    });

    //module.controller('CTRL',...);

    module.factory('UtilsFactory', ['$state', 'VALUE123', function($state, VALUE123){
        var local=$state;
        var logged = false;
        return {
            foo: function(a , b) {
                return a+b;
            },
            setLogged: function(){
                logged = true;
            },
            getLogged: function(){
                return logged;
            }
        };
    }]);

    var UtilsService = function($state){
        this.xxx = 1;
        this.foo = function(){
            console.log('hello');
        }
    };

    // new Foo();
    module.service('UtilsService', ['$state', UtilsService]);

    // 'Utils' - result from $get method
    module.provider('Utils', [function(){
        return {
            // 'UtilsProvider' - только на этапе module.config
            configValue1: 'defaults',
            //....
            $get: function(){
                var xx = this.configValue1;

                // 'Utils' - в контроллеры, в factory, в сервисы
                return {
                    foo: function() {
                        return xx;
                    }
                };
            }
        }
    }]);
})();
