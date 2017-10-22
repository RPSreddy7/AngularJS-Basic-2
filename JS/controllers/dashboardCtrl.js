(function() {
    'use strict';
    myApp.controller('dashCtrl', ['$scope', 'prasadService', 'ajaxFactory', '$rootScope', 'appConfiguration', '$uibModal', dashCtrlFunc]);

    function dashCtrlFunc($scope, prasadService, ajaxFactory, $rootScope, appConfiguration, $uibModal) {

        // variables
        $scope.saveButton = "New";
        $scope.deleteButton = "Delete";
        $scope.updateButton = "Edit";
        $scope.CancelButton = "Cancel";
        $scope.postsDataSource = [];

        // functions definitions
        $scope.getPosts = getPostFunc;
        $scope.saveData = saveDataFunc;
        $scope.delData = deleteButtonFunc;
        $scope.openDialog = openDialogFun;
      




        // function implementations
        function getPostFunc() {
            let rootUrl = appConfiguration.prasadRestApiURL; // (Let or where meaning same, Let using in ECMA script)

            // get  exmple
            var promiseObj = ajaxFactory.getRequestApi(rootUrl + 'posts', {});
            promiseObj.then(function(data) {
                $scope.postsDataSource = data;
            });
            promiseObj.catch(function(prasad) {
                console.error(prasad);
            });
            promiseObj.finally(function(d) {
                console.log('finally block executed : promiseObj', d);
            });
        }

        function saveDataFunc() {
            console.log("save function called ");
            $scope.openDialog();
        }

        function cancelFunc() {
            console.log("cancel function called ");
            $scope.canceldata();
        }
         function deleteButtonFunc() {
            console.log("delete function called ");
            
        }

        function openDialogFun() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'postsdata.html',
                controller: 'ModalInstanceCtrl'
            });
        }
        //while loading the page 
        $scope.getPosts();
        
    }




    myApp.controller('ModalInstanceCtrl', function($scope, $uibModalInstance) {

        $scope.title = "Create Record"

        $scope.ok = function() {
            console.log('ok called ')
            $uibModalInstance.dismiss('cancel');
        };

        $scope.cancel = function() {
            console.log('cancel called ')
            $uibModalInstance.dismiss('cancel');
        };
    });
})();