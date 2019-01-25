(function() {
    'use strict';
    myApp.controller('signInCtrl', ['$rootScope','$scope','prasadService','$state','appConfiguration','ajaxFactory', signInCtrlFunc]);

    function signInCtrlFunc($rootScope,$scope,prasadService,$state,appConfiguration,ajaxFactory) {
        
        $scope.formObj = {};
        $scope.title = "SignIn Page";
        $rootScope.showProcessing = false;

        $scope.save = function(isValid){
        	if(isValid){
        		prasadService.loggedinUser = $scope.formObj.signinName;
                ajaxFactory.loggedinPassword = $scope.formObj.passwordStr;
        		$state.go(appConfiguration.dashboardState); //( This statement moves to dashboard page url ki)
        	}
        }
    }
})()