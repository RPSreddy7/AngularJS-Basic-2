(function() {
    'use strict';
    myApp.controller('dashCtrl', ['$scope', 'prasadService', 'ajaxFactory', '$rootScope', 'appConfiguration', '$uibModal', dashCtrlFunc]);

    function dashCtrlFunc($scope, prasadService, ajaxFactory, $rootScope, appConfiguration, $uibModal) {

        // variables
        $scope.newButton = "New";
        $scope.editButton = "Edit";
        $scope.deleteButton = "Delete";

        // create array 
        $scope.postsDataSource = [];
        $scope.checkedDataSource = [];

        // functions definitions
        $scope.getPostsData = getPostsDataFunc;
        $scope.newData = newDataFunc;
        $scope.editData = editDataFunc;
        $scope.delData = delDataFunc;
        $scope.storeCheckData = storeCheckDataFunc;

        // function implementations
        function getPostsDataFunc() {
            $rootScope.showProcessing = true;
            let rootUrl = appConfiguration.prasadRestApiURL; // (Let or where meaning same, Let using in ECMA script)

            // get  exmple
            var promiseObj = ajaxFactory.getRequestApi(rootUrl + 'posts', {});
            promiseObj.then(function(data) {
                $scope.postsDataSource = data;
                $rootScope.showProcessing = false
            });
            promiseObj.catch(function(prasad) {
                console.error(prasad);
            });
            promiseObj.finally(function(d) {
                console.log('finally block executed : promiseOb', d);
            });
        }

        $scope.getPostsData();


        function newDataFunc() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: appConfiguration.templatePath + 'allModalDialogBox.html',
                controller: 'allModalDialogBoxCtrl',
                resolve: {
                    paramDS: function() {
                        return $scope.checkedDataSource;
                    }
                }
            });
            console.log("new button function called ");
        }

        function editDataFunc() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: appConfiguration.templatePath + 'allModalDialogBox.html',
                controller: 'allModalDialogBoxCtrl',
                resolve: {
                    paramDS: function() {
                        return $scope.checkedDataSource;
                    }
                }
            });
            console.log("edit button function called ");
        }

        function delDataFunc() {
            console.log("delete button function called ");
        }

        function storeCheckDataFunc(data) {
            if (data.selected) {
                $scope.checkedDataSource.push(data);
            } else {
                for (var i = 0; i < $scope.checkedDataSource.length; i++) {
                    var obj = $scope.checkedDataSource[i];
                    if (obj.id == data.id) {
                        $scope.checkedDataSource.splice(i, 1);
                    }
                }
            }
            console.log($scope.checkedDataSource);
        }

        
    }


})();