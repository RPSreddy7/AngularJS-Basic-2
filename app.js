/*
 []  : adhina third party libary use chesuko danaki

 Module : it is a packaging of (ctrls/services/factory/directives)

 angular loading starting point is app.js 

 1. app.js lo 
   a. config   functions chusthadhi >> (routers rastham)
   b. run function chusthadhi (app load inappudu adhina global variables set cheyali ante )
 2. 'xyx'  >> function params kuda same order same names reasons >> minifications inappudu recogni

*/
var myApp = angular.module('prasadApp', ['ui.router', 'ui.bootstrap', 'ngMessages']);
(function() {
    'use strict';

    myApp.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', '$httpProvider', 'appConfiguration', myConfigFn]);

    function myConfigFn($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider, appConfiguration) {
        // default that means without any route
        $urlRouterProvider.when('', appConfiguration.signIn);
        $urlRouterProvider.otherwise(appConfiguration.signIn);

        $stateProvider
            .state(appConfiguration.signInState, {
                url: appConfiguration.signIn,
                templateUrl: appConfiguration.templatePath + 'SignIn_Page.html',
                controller: 'signInCtrl'
            })
            .state(appConfiguration.registerState, {
                url: appConfiguration.register,
                templateUrl: appConfiguration.templatePath + 'Registration_Page.html',
                controller: 'registrationCtrl'
            })
            .state(appConfiguration.forgetState, {
                url: appConfiguration.forget,
                templateUrl: appConfiguration.templatePath + 'ForgetPassword_Page.html',
                controller: 'forgetpasswordCtrl'
            })
            .state(appConfiguration.dashboardState, {
                url: appConfiguration.dashboardUrl,
                templateUrl: appConfiguration.templatePath + 'dashboard.html',
                controller: 'dashCtrl'           
            })
            .state(appConfiguration.dashboardImageState,{
                url: appConfiguration.dashboardImageUrl,
                templateUrl: appConfiguration.templatePath + 'dashboardimagechange.html',
                controller: 'dashboardimagechangeCtrl'           
            });
    }

    myApp.run(['$rootScope', myRunFn]);

    function myRunFn($rootScope) {
        $rootScope.showProcessing = false;
        $rootScope.Loggin = "";
    }

})();