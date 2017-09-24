app.controller('SearchController', ['$scope', '$state', 'Search' ,function ($scope, $state, Search) {
    $scope.search = {
        input: ''
    };

    $scope.searchValue = function () {
        $state.go('search', {input: $scope.search.input});
    };
}]);