myApp.controller('allModalDialogBoxCtrl', function($scope, $uibModalInstance, paramDS) {

    $scope.title = "sdsdssd Recordtrdthdrujtrdurt";
    $scope.selectedDS = paramDS;
    console.log(paramDS);
    $scope.ok = function() {
        console.log('ok button called ')
        $uibModalInstance.dismiss('cancel');
    };

    $scope.cancel = function() {
        console.log('cancel button called ')
        $uibModalInstance.dismiss('cancel');
    };
});