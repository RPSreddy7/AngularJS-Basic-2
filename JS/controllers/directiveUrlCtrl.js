(function() {
    'use strict';
    myApp.controller('directiveUrl', ['$rootScope', '$scope', 'prasadService', '$state', 'appConfiguration', 'ajaxFactory', directiveUrlCtrlFunc]);

    function directiveUrlCtrlFunc($rootScope, $scope, prasadService, $state, appConfiguration, ajaxFactory) {
        $rootScope.showProcessing = false;
        $scope.userCity = "bangalore";
        $scope.localage = prasadService.loggedinUserage;
        $scope.gender = ajaxFactory.loggedinGender;
        $scope.empDS = [
            { "name": "Shyam", "email": "shyamjaiswal@gmail.com" },
            { "name": "Bob", "email": "bob32@gmail.com" },
            { "name": "Jai", "email": "jai87@gmail.com" }
        ];



    }
})()