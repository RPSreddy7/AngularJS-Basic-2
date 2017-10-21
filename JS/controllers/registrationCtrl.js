(function() {
    'use strict';
    myApp.controller('registrationCtrl', ['$scope','prasadService','ajaxFactory', registrationCtrlFunc]);

    function registrationCtrlFunc($scope,prasadService,ajaxFactory) {
        $scope.title = "User Registraion Page";
        console.log(prasadService.loggedinUser);
        console.log('regista >>>>>> ', ajaxFactory.loggedinPassword);
    }
})()