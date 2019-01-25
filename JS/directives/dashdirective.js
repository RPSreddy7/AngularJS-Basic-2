(function() {

    myApp.directive('tableDirective', ['appConfiguration', dashDirectiveFunc]);

    function dashDirectiveFunc(appConfiguration) {

        return {
            restrict: "EA",
            scope: {
               'usercity':'=',
                "mydata":'@',
                'mygender':'='
            },
            templateUrl: appConfiguration.templatePath + 'table.html',
            controller: function($scope) {
               console.log($scope);
               $scope.data = JSON.parse($scope.mydata);
            },
            link: function($scope, $element) {
                console.log($scope);

            }
        }

    }


})();