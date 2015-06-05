'use strict';

angular.module('angular-codeigniter-seed', [
    // sub-modules

    // vendors
    'ui.router',
    'ui.bootstrap',
    'oc.lazyLoad',
    'ngResource',
    'ngProgress',
    'ngCookies'
])

.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
    function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'apps/admin/views/home/index.html',
                resolve: {
                    homeController: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load('apps/admin/controllers/homeController.js');
                    }]
                }
            });
    }
])

.run(['$rootScope', 'ngProgress',
    function($rootScope, ngProgress) {
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            var toPath = toState.url;
            toPath = toPath.replace(new RegExp('/', 'g'), '');
            toPath = toPath.replace(new RegExp(':', 'g'), '-');
            $rootScope.state = toPath;
            if ($rootScope.state === '') {
                $rootScope.state = 'firstPage';
            }
        });

        $rootScope.$on('loading:progress', function() {
            ngProgress.start();
        });

        $rootScope.$on('loading:finish', function() {
            ngProgress.complete();
            //window.scrollTo(0, 0);
        });
    }
]);
