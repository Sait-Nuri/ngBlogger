app.controller('PluginController', ['$scope', 'Plugin' ,function ($scope, Plugin) {

    //Sunucu tarafı hazır olduğunda buradaki değişkenler
    // plugins.left#.items.params'a atanacak

    //Burada title, id, request dizisi gelecek
    //Bu dizi left3.items 'e atanacak
    var medikon = Plugin.getContent('MEDIKON');

    //Bu dizi left4.items 'e atanacak
    var guvoner = Plugin.getContent('GUVONER');

    //Bu dizi left5.items 'e atanacak
    var sacma = Plugin.getContent('SACMA');

    // Plugins Menu configuration
    $scope.plugins = {

        left1 : {
            'margin_top': '0px',
            'margin_bottom': '5px',
            'header': 'Menü',
            home: {
                'title': 'anasayfa',
                'collapse': true,
                'toggle': false,
                'sublist': [
                    {'title': 'sub1'},
                    {'title': 'sub2'},
                    {'title': 'sub3'}
                ]
            },
            news: {
                'title': 'haberler',
                'collapse': false
            },

            article: {
                'title': 'yazılar',
                'collapse': false
            },

            toolbag: {
                'title': 'Alet Çantası',
                'collapse': false
            },

            battlefield: {
                'title': 'Er meydanı',
                'collapse': false
            },

            itlaws: {
                'title': 'Bilişim Hukuku',
                'collapse': false
            }
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
                    route: 'medikon',
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
                    route: 'medikon',
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
                    route: 'medikon',
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
                    route: 'medikon',
                    collapse: false
                }
            ]
        },
        left4: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Güvenlik Önerileri',
            items: [
                {
                    title: 'Antivirüs Önerileri',
                    collapse: false,
                    route: 'guvoner',
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
                    route: 'guvoner',
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
                    route: 'guvoner',
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
        left5: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Saçma sapan sorular ve düşünceler',
            items: [
                {
                    title: 'Falan kişinin facesini patlatabilir misin?',
                    collapse: false,
                    route: 'sacma',
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
                    route: 'sacma',
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
                    route: 'sacma',
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
            'margin_top': '0px',
            'margin_bottom': '5px',
            'header': 'Son paylaşımlar'
        },
        right2: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Durum Bilginiz'
        },
        right3: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Bizi takip edin'
        },
        right4: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Abone ol, Siber olaylardan haberin olsun'
        }
    };
}]);