(function() {
    'use strict';
    myApp.controller('forgetpasswordCtrl', ['$scope','prasadService', forgetpasswordCtrlFunc]);

    function forgetpasswordCtrlFunc($scope,prasadService) {
        $scope.title = "ForgetPassword Page";
        console.log(prasadService.loggedinUser);
    }
})()