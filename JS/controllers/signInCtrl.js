(function() {
    'use strict';
    myApp.controller('signInCtrl', ['$scope','prasadService','$state','appConfiguration','prasadFactory', signInCtrlFunc]);

    function signInCtrlFunc($scope,prasadService,$state,appConfiguration,prasadFactory) {
        
        $scope.formObj = {};
        $scope.title = "SignIn Page";

        $scope.save = function(isValid){
        	if(isValid){
        		prasadService.loggedinUser = $scope.formObj.signinName;
                prasadFactory.loggedinPassword = $scope.formObj.passwordStr;
        		$state.go(appConfiguration.dashboardState);
        	}
        }
    }
})()