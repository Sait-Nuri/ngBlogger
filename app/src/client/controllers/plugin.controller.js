app.controller('PluginController', ['$scope' ,function ($scope) {
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
                    title: 'application security',
                    collapse: false
                },
                {
                    title: 'network security',
                    collapse: false
                },
                {
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
                    collapse: false
                },
                {
                    title: 'Güvenlik açığı nedir? nasıl oluşur?',
                    collapse: false
                },
                {
                    title: 'Büyük saldırılar nasıl yapılır?',
                    collapse: false
                },
                {
                    title: 'Siber ordu nedir?',
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
                    collapse: false
                },
                {
                    title: 'güvenli alışveriş',
                    collapse: false
                },
                {
                    title: 'güçlü şifre nasıl oluşturulur.',
                    collapse: false
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
                    collapse: false
                },
                {
                    title: 'Antivirüse ihtiyacım yok.',
                    collapse: false
                },
                {
                    title: 'Ben hekırım olm',
                    collapse: false
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