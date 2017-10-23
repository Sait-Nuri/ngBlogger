app.controller('AdminController', ['$scope', 'Plugin', 'Request' ,function ($scope, Plugin, Request) {
    $scope.admin = {
        editable: false,
        state: 'EKLE',
        subjects: [

        ],
        selectedSubject: undefined,
        selectedPage: undefined,
        selectedElement: undefined,
        old_selectedElement: undefined,
        pagelist: [],
        defaultSelect: 'paragraf',
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
        elements: [],
        delete_items: [],
        update_items: [],
        added_items: [],

        // Bu sayfa yüklendiğinde çağrılması gerekir.
        getElementTypes: function () {
            Plugin.getContent('ELEMENT_TYPE')
                .then(function(response){
                    $scope.admin.element_types = response.data;
                    /*element_types: [
                     {name: 'paragraf', id: '1'},
                     {name: 'video', id: '2'},
                     {name: 'resim', id: '3'},
                     {name: 'link', id: '4'},
                     {name: 'başlık', id: '5'}
                     ]*/
                })
                .catch(function(error){
                    console.log(error);
                });
        },

        // Admin sayfası açıldığında burası çalışır
        getSubjectList: function () {
            Plugin.getContent('MENU_LIST')
                .then(function(response){
                    //console.log("MENU_LIST called");
                    $scope.admin.subjects = response.data;
                    $scope.dumb("getSubjectList");
                    /*subjects: [
                     {title: 'Konu 1', url:'/asdfsadf', list: ['1', '2', '3']},
                     {title: 'Konu 2', url:'/asdfsadf', list: ['4', '5', '6']},
                     {title: 'Konu 3', url:'/asdfsadf', list: ['7', '8', '9']}
                     ]*/
                })
                .catch(function(error){
                    console.log(error);
                });
        },
        //view deki page, page.title olarak değiştirilecek
        //$scope.admin.subjects deki list ler silinecek.
        getSubject: function (index) {
            $scope.admin.selectedSubject = $scope.admin.subjects[index];
            var request = {
                method: 'GET',
                url: $scope.admin.selectedSubject.url
            };

            Request.request(request)
                .then(function(response){
                    $scope.admin.pagelist = response.data;
                    $scope.dumb();
                })
                .catch(function(error){
                    console.log(error);
                });
        },
        newPage: function () {
            $scope.admin.resetInput();
            $scope.admin.elements = [
                {type_name: 'başlık', type_id: '5', attr1: '', attr2: '', attr3: '', body: ''}
            ];
            $scope.admin.selectedPage = undefined;
            $scope.admin.editable = true;
        },
        editPage: function (page_index) {
            $scope.admin.selectedPage = $scope.admin.pagelist[page_index];
            $scope.admin.delete_items = [];
            $scope.admin.update_items = [];
            $scope.admin.added_items = [];
            //console.log("selected page");
            //console.log($scope.admin.selectedPage);

            //http çağrısı
            var request = {
                method: 'GET',
                url: $scope.admin.selectedSubject.url + '/' + $scope.admin.selectedPage.id + '/element'
            };

            Request.request(request)
                .then(function(response){
                    $scope.admin.elements = response.data;
                    //buraya id, attr1, attr2, attr3, type_id, page_id gelecek

                    $scope.admin.elements.forEach(function (element) {
                        element.type_name = $scope.admin.getTypeById(element.type_id);
                    });

                    //console.log("elements");
                    //console.log($scope.admin.elements);
                })
                .catch(function(error){
                    console.log(error);
                });

            $scope.admin.resetInput();
            $scope.admin.editable = true;
        },
        editElements: function (index) {
            $scope.admin.input = $scope.admin.elements[index];
            $scope.admin.selectedElement = $scope.admin.elements[index];
            $scope.admin.old_selectedElement = angular.copy($scope.admin.selectedElement);
            $scope.admin.state = 'GUNCELLE';

            //console.log("input");
            /*console.log("edit element!");
            console.log($scope.admin.selectedElement);*/
        },
        action: function () {
            if($scope.admin.state === 'EKLE'){
                $scope.admin.element_types.forEach(function (element) {
                    if(element.name === $scope.admin.input.type_name){
                        var new_element = {
                            type_name: element.name,
                            type_id: element.id,
                            attr1: $scope.admin.input.attr1,
                            attr2: $scope.admin.input.attr2,
                            attr3: $scope.admin.input.attr3,
                            body: $scope.admin.input.body
                        };

                        $scope.admin.elements.push(new_element);
                        $scope.admin.added_items.push(angular.copy(new_element));
                        $scope.admin.resetInput();
                    }
                });
            }else if($scope.admin.state === 'GUNCELLE'){
                $scope.admin.input = {};
                $scope.admin.state = 'EKLE';

                // compare objects
                if($scope.compareElements($scope.admin.selectedElement, $scope.admin.old_selectedElement)){
                    $scope.admin.selectedElement.type_id = $scope.admin.getIdByType($scope.admin.selectedElement.type_name);
                    $scope.admin.update_items.push(angular.copy($scope.admin.selectedElement));
                }

                $scope.admin.resetInput();
            }
        },
        getTypeById: function (id) {
            var types = $scope.admin.element_types;

            for(var i = 0; i < types.length; i++){
                if(id === types[i].id){
                    return types[i].name;
                }
            }
        },
        getIdByType: function (typeName) {
            var types = $scope.admin.element_types;

            for(var i = 0; i < types.length; i++){
                if(typeName === types[i].name){
                    return types[i].id;
                }
            }
        }
        ,
        resetInput: function () {
            $scope.admin.input.attr1 = '';
            $scope.admin.input.attr2 = '';
            $scope.admin.input.attr3 = '';
            $scope.admin.input.body = '';
            $scope.admin.input.name = $scope.admin.defaultSelect;
        },
        update: function () {
            /*console.log("will be deleted");
            console.log($scope.admin.delete_items);

            console.log("will be updated");
            console.log($scope.admin.update_items);

            console.log("will be added");
            console.log($scope.admin.added_items);*/

            var page_update = {
                method: 'PUT',
                url: $scope.admin.selectedSubject.url + '/' + $scope.admin.selectedPage.id,
                data: {data: $scope.admin.selectedPage}
            };

            var element_update = {
                method: 'PUT',
                url: $scope.admin.selectedSubject.url + '/' + $scope.admin.selectedPage.id + '/element',
                data: {data: $scope.getParsedElements($scope.admin.update_items)}
            };

            var element_delete = {
                method: 'DELETE',
                url: $scope.admin.selectedSubject.url + '/' + $scope.admin.selectedPage.id + '/element',
                data: {data: $scope.getParsedElements($scope.admin.delete_items)},
                headers: { 'Content-type': 'application/json;charset=utf-8'}
            };

            var element_add = {
                method: 'POST',
                url: $scope.admin.selectedSubject.url + '/' + $scope.admin.selectedPage.id + '/element',
                data: {data: $scope.getParsedElements($scope.admin.added_items)}
            };

            /*//page update request
            Request.request(page_update)
                .then(function (response){
                    console.log(response.statusText);
                })
                .catch(function (err){
                    console.log(err);
                });*/

            // updated elements request
            if($scope.admin.update_items.length > 0){
                Request.request(element_update)
                    .then(function (response){
                        console.log(response.statusText);
                        console.log($scope.admin.update_items);
                        $scope.admin.update_items = [];
                    })
                    .catch(function (err){
                        console.log(err);
                    });
            }

            // deleted items request
            if($scope.admin.delete_items.length > 0){
                Request.request(element_delete)
                    .then(function (response){
                        console.log(response.statusText);
                        console.log($scope.admin.delete_items);
                        $scope.admin.delete_items = [];
                    })
                    .catch(function (err){
                        console.log(err);
                    });
            }

            if($scope.admin.added_items.length > 0){
                Request.request(element_add)
                    .then(function (response){
                        console.log(response.statusText);
                        console.log($scope.admin.added_items);
                        $scope.admin.added_items = [];
                    })
                    .catch(function (err){
                        console.log(err);
                    });
            }

        },
        create: function () {
            var subject_url = $scope.admin.selectedSubject.url;
            var page_id = $scope.admin.selectedPage.id;

            var model_request = {
                method: 'POST',
                url: subject_url + '/' + page_id
            };

            var element_request = {
                method: 'POST',
                url: subject_url + '/' + page_id + '/element',
                data: $scope.admin.elements
            };

            Request.request(model_request)
                .then(function(model_response){
                    console.log(model_response.data);

                    return Request.request(element_request);
                })
                .then(function (element_response){
                    console.log(element_response
                        .data);
                }).catch(function (err){
                    console.log(err);
                });
            //console.log("created");
        },
        deleteElement: function () {
            if($scope.admin.selectedElement){
                /*console.log("deleted!");
                console.log($scope.admin.selectedElement);*/
                $scope.admin.delete_items.push(angular.copy($scope.admin.selectedElement));
                var index = $scope.admin.elements.indexOf($scope.admin.selectedElement);
                $scope.admin.elements.splice(index, 1);
            }else{
                console.log("selected element is empty");
            }

            $scope.admin.resetInput();
            $scope.admin.state = 'EKLE';
        }
    };
    $scope.init = function () {
        $scope.admin.getSubjectList();
        $scope.admin.getElementTypes();
    };

    $scope.dumb = function (caller_name) {
        //console.log(caller_name);
        //console.log($scope.admin);
    };

    $scope.compareElements = function (a, b) {
        return JSON.stringify(a, function( key, value ) {
            if( key === "$$hashKey" ) {return undefined;}
            return value;
        }) !== JSON.stringify(b, function( key, value ) {
            if( key === "$$hashKey" ) {return undefined;}
            return value;
        })
    };

    $scope.getParsedElements = function (list) {
        return JSON.parse(JSON.stringify(list, function( key, value ) {
            if( key === "$$hashKey" ) {return undefined;}
            return value;
        }));
    }
}]);