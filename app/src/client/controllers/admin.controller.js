app.controller('AdminController', ['$scope' ,function ($scope) {
    $scope.state = 'ADD';
    $scope.defaultSelect = 'paragraf';

    $scope.input = {
        name: $scope.defaultSelect,
        body: '',
        attr1: '',
        attr2: '',
        attr3: ''
    };

    $scope.name = 'paragraf';
    $scope.body = '';
    $scope.element_types = [
        {name: 'paragraf', id: '1'},
        {name: 'video', id: '2'},
        {name: 'resim', id: '3'},
        {name: 'link', id: '4'},
        {name: 'başlık', id: '5'}
    ];

    $scope.elements = [
        {name: 'başlık', id: '4', attr1: '123', attr2: '342', attr3: '234234', body: '123123'},
        {name: 'paragraf', id: '1', attr1: '', attr2: '', attr3: '', body: ''}
    ];

    $scope.action = function () {
        if($scope.state === 'ADD'){
            $scope.element_types.forEach(function (element) {
                if(element.name === $scope.input.name){
                    var new_element = {
                        name: element.name,
                        id: element.id,
                        attr1: $scope.input.attr1,
                        attr2: $scope.input.attr2,
                        attr3: $scope.input.attr3,
                        body: $scope.input.body
                    };

                    $scope.elements.push(new_element);
                    $scope.resetInput();
                }
            });
        }else if($scope.state === 'UPDATE'){
            $scope.input = {};
            $scope.state = 'ADD';
            $scope.resetInput();
        }
    };

    $scope.edit = function (index) {
        $scope.input = $scope.elements[index];
        $scope.state = 'UPDATE';
    };

    $scope.resetInput = function () {
        $scope.input.attr1 = '';
        $scope.input.attr2 = '';
        $scope.input.attr3 = '';
        $scope.input.body = '';
        $scope.input.selected = 'paragraf';
        $scope.input.name = $scope.defaultSelect;
        console.log("reset!");
    }
}]);
