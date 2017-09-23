app.service('Request', ['$http', '$q' ,function($http, $q){
    /*
    * Request method with promise
    * param request: includes url and other option for request
    * */
    this.request = function(request) {
        // Creates a Deferred object
        var deferred = $q.defer();

        $http(request)
            .then(function successCallback(response) {
                console.log(response.status);
                deferred.resolve(response);
            }, function errorCallback(response) {
                console.log('Error status: '+ response.status);
                deferred.resolve(response);
            });

        // The promise of the deferred task
        return deferred.promise;
    };
}]);