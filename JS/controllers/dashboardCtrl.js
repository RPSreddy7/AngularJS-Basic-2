(function() {
    'use strict';
    myApp.controller('dashCtrl', ['$scope', 'prasadService', 'prasadFactory','$rootScope', dashCtrlFunc]);

    function dashCtrlFunc($scope, prasadService, prasadFactory,$rootScope) {
        $scope.uservalue = "";
        $scope.uservalue1 = "";
        $scope.imgUrl = "https://starsunfolded-1ygkv60km.netdna-ssl.com/wp-content/uploads/2015/12/Pawan-Kalyan.jpg";


        $scope.$watchGroup(['uservalue', 'uservalue1'], function(n, o) {
            console.log(n, o);
            if (o != n) {
                if ($scope.imgUrl.indexOf('Pawan-Kalyan.jpg') > 0) {
                    $scope.imgUrl = "https://cdn.worldvectorlogo.com/logos/angular-3.svg";
                } else {
                    $scope.imgUrl = "https://starsunfolded-1ygkv60km.netdna-ssl.com/wp-content/uploads/2015/12/Pawan-Kalyan.jpg";
                }
            }
        });
    }
})()