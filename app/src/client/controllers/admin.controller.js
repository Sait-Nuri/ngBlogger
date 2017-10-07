app.controller('AdminController', ['$scope' ,function ($scope) {
    $scope.admin = {
        editable: false,
        state: 'EKLE',
        subjects: [
            {title: 'Konu 1', url:'/asdfsadf', list: ['1', '2', '3']},
            {title: 'Konu 2', url:'/asdfsadf', list: ['4', '5', '6']},
            {title: 'Konu 3', url:'/asdfsadf', list: ['7', '8', '9']}
        ],
        selectedSubject: undefined,
        selectedPage: undefined,
        pagelist: [],
        defaultSelect: 'paragraf',
        title: '',
        input: {
            name: 'paragraf',
            body: '',
            attr1: '',
            attr2: '',
            attr3: ''
        },
        element_types: [
            {name: 'paragraf', id: '1'},
            {name: 'video', id: '2'},
            {name: 'resim', id: '3'},
            {name: 'link', id: '4'},
            {name: 'başlık', id: '5'}
        ],
        elements: [

        ],
        getSubjectList: function () {
            //http request
        },
        getSubject: function (index) {
            //http request
            $scope.admin.selectedSubject = index;
            $scope.admin.pagelist = $scope.admin.subjects[index].list;
        },
        action: function () {
            if($scope.admin.state === 'EKLE'){
                $scope.admin.element_types.forEach(function (element) {
                    if(element.name === $scope.admin.input.name){
                        var new_element = {
                            name: element.name,
                            id: element.id,
                            attr1: $scope.admin.input.attr1,
                            attr2: $scope.admin.input.attr2,
                            attr3: $scope.admin.input.attr3,
                            body: $scope.admin.input.body
                        };

                        $scope.admin.elements.push(new_element);
                        $scope.admin.resetInput();
                    }
                });
            }else if($scope.admin.state === 'GUNCELLE'){
                $scope.admin.input = {};
                $scope.admin.state = 'EKLE';
                $scope.admin.resetInput();
            }
        },
        newPage: function () {
            $scope.admin.resetInput();
            $scope.admin.elements = [
                {name: 'başlık', id: '', attr1: '', attr2: '', attr3: '', body: ''}
            ];
            $scope.admin.selectedPage = undefined;
            $scope.admin.editable = true;
        },
        editPage: function (index) {
            //http
            $scope.admin.elements = [
                {name: 'başlık', id: '4', attr1: '123', attr2: '342', attr3: '234234', body: '123123'},
                {name: 'paragraf', id: '1', attr1: '', attr2: '', attr3: '', body: ''}
            ];
            $scope.admin.selectedPage = $scope.admin.pagelist[index];
            $scope.admin.resetInput();
            $scope.admin.editable = true;
        },
        editElements: function (index) {
            $scope.admin.input = $scope.admin.elements[index];
            $scope.admin.state = 'GUNCELLE';
            //console.log($scope.admin.elements[index]);
        },
        resetInput: function () {
            $scope.admin.input.attr1 = '';
            $scope.admin.input.attr2 = '';
            $scope.admin.input.attr3 = '';
            $scope.admin.input.body = '';
            $scope.admin.input.name = $scope.admin.defaultSelect;
        },
        createPage: function (item) {
            //http
            $scope.admin.resetInput();
            $scope.admin.creatable = true;
        }
    };
}]);
app.controller('AdminNewPageController', ['$scope', function ($scope) {

    $scope.newpage = {
        creatable: false,
        state: 'EKLE',
        subjects: [
            {title: 'Konu 1', url:'/asdfsadf', list: ['1', '2', '3']},
            {title: 'Konu 2', url:'/asdfsadf', list: ['4', '5', '6']},
            {title: 'Konu 3', url:'/asdfsadf', list: ['7', '8', '9']}
        ],
        itemlist: [],
        defaultSelect: 'paragraf',
        title: '',
        input: {
            name: 'paragraf',
            body: '',
            attr1: '',
            attr2: '',
            attr3: ''
        },
        element_types: [
            {name: 'paragraf', id: '1'},
            {name: 'video', id: '2'},
            {name: 'resim', id: '3'},
            {name: 'link', id: '4'},
            {name: 'başlık', id: '5'}
        ],
        elements: [
            {name: 'başlık', id: '4', attr1: '123', attr2: '342', attr3: '234234', body: '123123'},
            {name: 'paragraf', id: '1', attr1: '', attr2: '', attr3: '', body: ''}
        ],
        getSubjectList: function () {
            //http request
        },
        getSubject: function (index) {
            //http request
            $scope.newpage.itemlist = $scope.newpage.subjects[index].list;
        },
        action: function () {
            if($scope.newpage.state === 'EKLE'){
                $scope.newpage.element_types.forEach(function (element) {
                    if(element.name === $scope.newpage.input.name){
                        var new_element = {
                            name: element.name,
                            id: element.id,
                            attr1: $scope.newpage.input.attr1,
                            attr2: $scope.newpage.input.attr2,
                            attr3: $scope.newpage.input.attr3,
                            body: $scope.newpage.input.body
                        };

                        $scope.newpage.elements.push(new_element);
                        $scope.newpage.resetInput();
                    }
                });
            }else if($scope.newpage.state === 'GUNCELLE'){
                $scope.newpage.input = {};
                $scope.newpage.state = 'EKLE';
                $scope.newpage.resetInput();
            }
        },
        edit: function (index) {
            $scope.newpage.input = $scope.newpage.elements[index];
            $scope.newpage.state = 'GUNCELLE';
        },
        resetInput: function () {
            $scope.newpage.input.attr1 = '';
            $scope.newpage.input.attr2 = '';
            $scope.newpage.input.attr3 = '';
            $scope.newpage.input.body = '';
            $scope.newpage.input.selected = 'paragraf';
            $scope.newpage.input.name = $scope.newpage.defaultSelect;
        },
        createPage: function (item) {
            //http
            $scope.newpage.resetInput();
            $scope.newpage.creatable = true;
        },
        update: function () {

        },
        send: function () {

        }
    };
}]);

app.controller('AdminEditPageController', ['$scope', function ($scope) {
    $scope.editpage = {
        editable: false,
        subjects: [
            {title: 'Konu 1', url:'/asdfsadf', list: ['1', '2', '3']},
            {title: 'Konu 2', url:'/asdfsadf', list: ['4', '5', '6']},
            {title: 'Konu 3', url:'/asdfsadf', list: ['7', '8', '9']}
        ],
        itemlist: [],
        getSubjectList: function () {
            //http request
        },
        getSubject: function (index) {
            //http request
            $scope.editpage.itemlist = $scope.editpage.subjects[index].list;
        },
        editPage: function (item) {
            //http
            $scope.newpage.resetInput();
            $scope.editpage.editable = true;
        }
    };
    $scope.newpage = {
        state: 'EKLE',
        defaultSelect: 'paragraf',
        input: {
            name: 'paragraf',
            body: '',
            attr1: '',
            attr2: '',
            attr3: ''
        },
        name: 'paragraf',
        body: '',
        element_types: [
            {name: 'paragraf', id: '1'},
            {name: 'video', id: '2'},
            {name: 'resim', id: '3'},
            {name: 'link', id: '4'},
            {name: 'başlık', id: '5'}
        ],
        elements: [
            {name: 'başlık', id: '4', attr1: '123', attr2: '342', attr3: '234234', body: '123123'},
            {name: 'paragraf', id: '1', attr1: '', attr2: '', attr3: '', body: ''}
        ],
        action: function () {
            if($scope.newpage.state === 'EKLE'){
                $scope.newpage.element_types.forEach(function (element) {
                    if(element.name === $scope.newpage.input.name){
                        var new_element = {
                            name: element.name,
                            id: element.id,
                            attr1: $scope.newpage.input.attr1,
                            attr2: $scope.newpage.input.attr2,
                            attr3: $scope.newpage.input.attr3,
                            body: $scope.newpage.input.body
                        };

                        $scope.newpage.elements.push(new_element);
                        $scope.newpage.resetInput();
                    }
                });
            }else if($scope.newpage.state === 'UPDATE'){
                $scope.newpage.input = {};
                $scope.newpage.state = 'EKLE';
                $scope.newpage.resetInput();
            }
        },
        edit: function (index) {
            $scope.newpage.input = $scope.newpage.elements[index];
            $scope.newpage.state = 'UPDATE';
        },
        resetInput: function () {
            $scope.newpage.input.attr1 = '';
            $scope.newpage.input.attr2 = '';
            $scope.newpage.input.attr3 = '';
            $scope.newpage.input.body = '';
            $scope.newpage.input.selected = 'paragraf';
            $scope.newpage.input.name = $scope.newpage.defaultSelect;
        },
        update: function () {

        }
    };

}]);