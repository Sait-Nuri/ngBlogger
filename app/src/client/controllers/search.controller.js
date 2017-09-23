app.controller('SearchController', ['$scope', '$state', 'Search' ,function ($scope, $state, Search) {
    $scope.search = {
        input: ''
    };

    $scope.searchValue = function () {
        var results = Search.search_request;
        $state.go('search', {input: $scope.search.input});
    };
}]);