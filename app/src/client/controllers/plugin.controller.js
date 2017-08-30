app.controller('PluginController', ['$scope' ,function ($scope) {
    $scope.plugins = {
        left1 : {
            'margin_top': '0px',
            'margin_bottom': '5px',
            'header': 'Başlık 1',
            'menu_list': {
                'anasayfa': {
                    'title': 'Anasayfa',
                    'toggle': false
                },
                'haberler': {
                    'title': 'Hablerler',
                    'toggle': false
                }
            }
        },
        left2 : {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Başlık 2'
        },
        left3 : {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Başlık 3'
        },
        left4: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Başlık 4'
        },
        right1: {
            'margin_top': '0px',
            'margin_bottom': '5px',
            'header': 'Başlık 1'
        },
        right2: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Başlık 2'
        },
        right3: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Başlık 3'
        },
        right4: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Başlık 4'
        }
    };
}]);