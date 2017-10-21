(function() {
    'use strict'

    myApp.factory('ajaxFactory', ['$q', '$http', myFunName]);

    function myFunName($q, $http) {

        var apiJSONFile = '/data/data.json'; //'/api/Planogram/Get/';

        // functions definition
        var methods = {};
        methods['getRequestApi'] = getRequestApiFunc;
        methods['postRequestApi'] = postRequestApiFunc;
        methods['putRequestApi'] = putRequestApiFunc;
        methods['deleteRequestApi'] = deleteRequestApiFunc

        // functions impelemetation

        function getRequestApiFunc(url, data) {
            var deferred = $q.defer();
            $http.get(url, data)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }

        function postRequestApiFunc(url, data) {
            var deferred = $q.defer();
            $http.post(url, data)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }

        function putRequestApiFunc(url, data) {
            var deferred = $q.defer();
            $http.put(url, data)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }

        function deleteRequestApiFunc(url, data) {
            var deferred = $q.defer();
            $http.delete(url, data)
                .success(function(data, status, headers, config) {
                    deferred.resolve(data);
                })
                .error(function(data, status, headers, config) {
                    deferred.reject(data);
                });

            return deferred.promise;
        }
        return methods;
    }
})()