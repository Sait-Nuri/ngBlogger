app.controller('PluginController', ['$scope', 'Plugin', 'Request' ,function ($scope, Plugin, Request) {

    //Sunucu tarafı hazır olduğunda buradaki değişkenler
    // plugins.left#.items.params'a atanacak

    //Burada title, id, request dizisi gelecek
    //Bu dizi left3.items 'e atanacak
    /*Plugin.getContent('MEDIKON')
        .then(function(response){
            var pages = response.data;

            for (var model in pages) {
                var page = {};
                page.title = model.title;
                page.collapse = false;
                page.params = {
                    id: model.id,
                    request: {
                        method: 'GET',
                        url: '/medikon/' + model.id + "/element"
                    }
                };

                $scope.plugins.left3.items.push(page);
            }
        })
        .catch(function(error){
            console.log(error);
            $scope.plugins.left3.items = [];
        });*/

    //Bu dizi left4.items 'e atanacak
    /*Plugin.getContent('GUVONER')
        .then(function(response){
            var pages = response.data;

            for (var model in pages) {
                var page = {};
                page.title = model.title;
                page.collapse = false;
                page.params = {
                    id: model.id,
                    request: {
                        method: 'GET',
                        url: '/guvoner/' + model.id + '/element'
                    }
                };

                $scope.plugins.left4.items.push(page);
            }
        })
        .catch(function(error){
            console.log(error);
            $scope.plugins.left4.items = [];
        });*/

    // Bu dizi left5.items 'e atanacak
    /*Plugin.getContent('SACMA')
        .then(function(response){
            var pages = response.data;

            for (var model in pages) {
                var page = {};
                page.title = model.title;
                page.collapse = false;
                page.params = {
                    id: model.id,
                    request: {
                        method: 'GET',
                        url: '/sacma/' + model.id + '/element'
                    }
                };

                $scope.plugins.left5.items.push(page);
            }
        })
        .catch(function(error){
            console.log(error);
            $scope.plugins.left5.items = [];
        });*/

    // Ziyaretçinin ip lokasyon bilgilerini sorugla
    //var geoinfo = Plugin.getContent('GEOINFO');

    // Plugins Menu configuration
    $scope.plugins = {

        left1 : {
            'margin_top': '0px',
            'margin_bottom': '5px',
            'header': 'Menü',
            items: [
                {
                    route: 'home',
                    title: 'anasayfa',
                    collapse: false,
                    toggle: false,
                    sublist: [
                        {'title': 'sub1'},
                        {'title': 'sub2'},
                        {'title': 'sub3'}
                    ]
                },
                {
                    route: 'news',
                    title: 'haberler',
                    collapse: false
                },
                {
                    route: 'article',
                    title: 'yazılar',
                    collapse: false
                },
                {
                    route: 'toolbag',
                    title: 'Alet Çantası',
                    collapse: false
                },
                {
                    route: 'battlefield',
                    title: 'Er meydanı',
                    collapse: false
                },
                {
                    route: 'itlaws',
                    title: 'Bilişim Hukuku',
                    collapse: false
                }
            ]
        },
        left2 : {
            margin_top: '5px',
            margin_bottom: '5px',
            header : 'Eğitimler',
            items: [
                {
                    route: 'appsec',
                    title: 'application security',
                    collapse: false
                },
                {
                    route: 'netsec',
                    title: 'network security',
                    collapse: false
                },
                {
                    route: 'endsec',
                    title: 'endpoint security',
                    collapse: false
                }
            ]
        },
        left3 : {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Merak Edilen Konular',
            route: 'medikon',
            items: [
                {
                    title: 'Hacker kime denir/denmez?',
                    params:{
                        id: '41231',
                        request: {
                            method: 'GET',
                            url: '/medikon/41231'
                        }
                    },
                    collapse: false
                },
                {
                    title: 'Güvenlik açığı nedir? nasıl oluşur?',
                    params:{
                        id: '34234',
                        request: {
                            method: 'GET',
                            url: '/medikon/34234'
                        }
                    },
                    collapse: false
                },
                {
                    title: 'Büyük saldırılar nasıl yapılır?',
                    params:{
                        id: '432423',
                        request: {
                            method: 'GET',
                            url: '/medikon/432423'
                        }
                    },
                    collapse: false
                },
                {
                    title: 'Siber ordu nedir?',
                    params:{
                        id: '34242312',
                        request: {
                            method: 'GET',
                            url: '/medikon/34242312'
                        }
                    },
                    collapse: false
                }
            ]
        },
        left4 : {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Güvenlik Önerileri',
            route: 'guvoner',
            items: [
                {
                    title: 'Antivirüs Önerileri',
                    collapse: false,
                    params:{
                        id: '2342',
                        request: {
                            method: 'GET',
                            url: '/guvoner/2342'
                        }
                    }
                },
                {
                    title: 'güvenli alışveriş',
                    collapse: false,
                    params:{
                        id: '222342334',
                        request: {
                            method: 'GET',
                            url: '/guvoner/222342334'
                        }
                    }
                },
                {
                    title: 'güçlü şifre nasıl oluşturulur.',
                    collapse: false,
                    params:{
                        id: '3434131',
                        request: {
                            method: 'GET',
                            url: '/guvoner/3434131'
                        }
                    }
                }
            ]
        },
        left5 : {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Saçma sapan sorular ve düşünceler',
            route: 'sacma',
            items: [
                {
                    title: 'Falan kişinin facesini patlatabilir misin?',
                    collapse: false,
                    params:{
                        id: '2342',
                        request: {
                            method: 'GET',
                            url: '/sacma/2342'
                        }
                    }
                },
                {
                    title: 'Antivirüse ihtiyacım yok.',
                    collapse: false,
                    params:{
                        id: '1231231',
                        request: {
                            method: 'GET',
                            url: '/sacma/1231231'
                        }
                    }
                },
                {
                    title: 'Ben hekırım olm',
                    collapse: false,
                    params:{
                        id: '1234134',
                        request: {
                            method: 'GET',
                            url: '/sacma/1234134'
                        }
                    }
                }
            ]
        },
        right1: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Durum Bilginiz',
            attr:{
                ip: '10.0.0.2',
                country: 'Türkiye',
                city: 'İstanbul',
                browser: 'Chrome',
                isp: 'Superonline'
            }
        },
        right2: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Bizi takip edin'
        },
        right3: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Abone ol, Siber olaylardan haberin olsun'
        }
    };

     $scope.subscriber = {
         email: null
     };

     $scope.subscribe = function () {
         var subsribtion_request = {
             method: 'POST',
             url: '/subscribe',
             data: $scope.subscriber.email
         };

         //Request.request(subsribtion_request);
     }
}]);