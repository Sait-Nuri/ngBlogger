app.controller('CommentController', ['$scope', 'Request' ,function ($scope, Request) {

    $scope.sendMessage = function (request) {
        //Request.request(request);
        console.log(request.data);
    }
}]);