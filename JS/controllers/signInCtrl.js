(function() {
    'use strict';
    myApp.controller('signInCtrl', ['$scope','prasadService','$state','appConfiguration','ajaxFactory', signInCtrlFunc]);

    function signInCtrlFunc($scope,prasadService,$state,appConfiguration,ajaxFactory) {
        
        $scope.formObj = {};
        $scope.title = "SignIn Page";

        $scope.save = function(isValid){
        	if(isValid){
        		prasadService.loggedinUser = $scope.formObj.signinName;
                ajaxFactory.loggedinPassword = $scope.formObj.passwordStr;
        		$state.go(appConfiguration.dashboardState); //( This statement moves to dashboard page url ki)
        	}
        }
    }
})()