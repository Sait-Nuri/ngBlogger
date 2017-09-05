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
            margin_top: '5px',
            margin_bottom: '5px',
            header : 'Eğitimler',
            list: {
                appsec:{
                    title: 'application security'
                },
                netsec: {
                    title: 'network security'
                },
                endpsec: {
                    title: 'endpoint security'
                }
            }
        },
        left3 : {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Merak Edilen Konular',
            list: {
                konu1: {
                    title: 'Hacker kime denir/denmez?'
                },
                konu2: {
                    title: 'Güvenlik açığı nedir? nasıl oluşur?'
                },
                konu3: {
                    title: 'Büyük saldırılar nasıl yapılır?'
                },
                konu4: {
                    title: 'Siber ordu nedir?'
                }
            }
        },
        left4: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Güvenlik Önerileri',
            list: {
                konu1: {
                    title: 'Antivirüs Önerileri'
                },
                konu2: {
                    title: 'güvenli alışveriş'
                },
                konu3: {
                    title: 'güçlü şifre nasıl oluşturulur.'
                }
            }
        },
        left5: {
            'margin_top': '5px',
            'margin_bottom': '5px',
            'header': 'Saçma sapan sorular ve düşünceler',
            list: {
                konu1: {
                    title: 'Falan kişinin facesini patlatabilir misin?'
                },
                konu2: {
                    title: 'Antivirüse ihtiyacım yok.'
                },
                konu3: {
                    title: 'Ben hekırım olm'
                }
            }
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