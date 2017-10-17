(function() {
    'use strict';
    myApp.controller('registrationCtrl', ['$scope','prasadService','prasadFactory', registrationCtrlFunc]);

    function registrationCtrlFunc($scope,prasadService,prasadFactory) {
        $scope.title = "User Registraion Page";
        console.log(prasadService.loggedinUser);
        console.log('regista >>>>>> ', prasadFactory.loggedinPassword);
    }
})()