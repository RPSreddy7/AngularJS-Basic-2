(function() {
    'use strict';
    myApp.controller('dashCtrl', ['$scope', 'prasadService', 'ajaxFactory', '$rootScope', 'appConfiguration', dashCtrlFunc]);

    function dashCtrlFunc($scope, prasadService, ajaxFactory, $rootScope, appConfiguration) {

        let rootUrl = appConfiguration.prasadRestApiURL; // (Let or where meaning, Let using in ECMA script)
        console.log(ajaxFactory)
        // get  exmple
        var promiseObj = ajaxFactory.getRequestApi(rootUrl + 'posts/10', {});
        promiseObj.then(function(data) {
            console.log(data);
        });
        promiseObj.catch(function(prasad) {
            console.error(prasad);
        });
        promiseObj.finally(function(d) {
            console.log('finally block executed : promiseObj', d);
        });

        // post exmple
        // 1. body lo data ni pamstham ... size unlimite  
        var promisePostObj = ajaxFactory.postRequestApi(rootUrl + 'posts', {
            title: 'foo',
            body: 'bar',
            userId: 1
        });
        promisePostObj.then(function(data) {
            console.log(data);
        });
        promisePostObj.catch(function(prasad) {
            console.error(prasad);
        });
        // promisePostObj.finally(function(d) {
        //     console.log('finally block executed : promisePostObj', d);
        // });


        // $scope.uservalue = "";
        // $scope.uservalue1 = "";
        // $scope.imgUrl = "https://starsunfolded-1ygkv60km.netdna-ssl.com/wp-content/uploads/2015/12/Pawan-Kalyan.jpg";


        // $scope.$watchGroup(['uservalue', 'uservalue1'], function(n, o) {
        //     console.log(n, o);
        //     if (o != n) {
        //         if ($scope.imgUrl.indexOf('Pawan-Kalyan.jpg') > 0) {
        //             $scope.imgUrl = "https://cdn.worldvectorlogo.com/logos/angular-3.svg";
        //         } else {
        //             $scope.imgUrl = "https://starsunfolded-1ygkv60km.netdna-ssl.com/wp-content/uploads/2015/12/Pawan-Kalyan.jpg";
        //         }
        //     }
        // });
    }
})()