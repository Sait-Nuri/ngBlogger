/**
 * Created by saidnuriPC on 9.09.2017.
 */
app.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider) {
    var menu_plugin = {
        home: {
            main_route: {
                name: 'home',
                url: '/home',
                templateUrl: 'partials/route.mainpage.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    $scope.content = Plugin.getContent('HOME')
                        .then(function(response){
                            $scope.content = response.data;
                        })
                        .catch(function(error){
                            console.log(error);
                            $scope.content = [];
                        });
                    /*
                    $scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'article.page',
                        request: {
                            method: 'GET',
                            url: '/article/24123'
                        }
                    };
                    */
                    $scope.page_title = 'Anasayfa';
                }]
            },
            children: []
        },
        article: {
            main_route: {
                name: 'article',
                url: '/article',
                templateUrl: 'partials/route.article.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    Plugin.getContent('ARTICLE')
                        .then(function(response){
                            console.log("article data");
                            console.log(response.data);
                            $scope.content = response.data;
                        })
                        .catch(function(error){
                            console.log(error);
                            $scope.content = [];
                        });

                    /*
                    $scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'article.page',
                        request: {
                            method: 'GET',
                            url: '/article/24123'
                        }
                    };
                    */
                    $scope.page_title = 'Yazılar';
                }]
            },
            children: {
                article_page: {
                    name: 'article.page',
                    url: '/:id',
                    params:{
                        id: null,
                        request: null
                    },
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', 'Request', '$stateParams', function ($scope, Request, $stateParams) {
                                //Request.request($stateParams.request);
                                $scope.content = {
                                    author: 'Sait UYANIK',
                                    date: '11.02.1992',
                                    num_of_read:'12',
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain',
                                    first_paragraph: 'İlk paragraf',
                                    tags: ['security', 'infosec', 'data-breach']
                                }
                            }]
                        }
                    }
                }
            }
        },
        news: {
            main_route: {
                name: 'news',
                url: '/news',
                templateUrl: 'partials/route.news.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    $scope.content = Plugin.getContent('NEWS')
                        .then(function(response){
                            $scope.content = response.data;
                        })
                        .catch(function(error){
                            console.log(error);
                            $scope.content = [];
                        });
/*
                    $scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'news.page',
                        request: {
                            method: 'GET',
                            url: '/news/24123'
                        }
                    };
*/
                    $scope.page_title = 'Haber';
                }]
            },
            children: {
                news_page: {
                    name: 'news.page',
                    url: '/:id',
                    params:{
                        id: null,
                        request: null
                    },
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', '$stateParams', function ($scope, $stateParams) {
                                var result = null; //Request.request($stateParams.request);
                                $scope.content = {
                                    author: 'Sait UYANIK',
                                    date: '11.02.1992',
                                    num_of_read:'12',
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain',
                                    first_paragraph: 'İlk paragraf'
                                }

                            }]
                        }
                    }
                }
            }
        },
        toolbag: {
            main_route: {
                name: 'toolbag',
                url: '/toolbag',
                templateUrl: 'partials/route.toolbag.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    $scope.content = Plugin.getContent('TOOLBAG')
                        .then(function(response){
                            $scope.content = response.data;
                        })
                        .catch(function(error){
                            console.log(error);
                            $scope.content = [];
                        });
                    /*
                    $scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'toolbag.page'
                    };
                    */
                    $scope.page_title = 'Alet Çantası';
                }]
            },
            children: {
                toolbag_page : {
                    name: 'toolbag.page',
                    url: '/:id',
                    params:{
                        id: null,
                        request: null
                    },
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', function ($scope) {
                                //Request.request($stateParams.request);
                                $scope.content = {
                                    author: 'Sait UYANIK',
                                    date: '11.02.1992',
                                    num_of_read:'12',
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain'
                                }
                            }]
                        }
                    }
                }
            }
        },
        battlefield: {
            main_route: {
                name: 'battlefield',
                url: '/battlefield',
                templateUrl: 'partials/route.battlefield.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    $scope.content = Plugin.getContent('BATTLEFIELD')
                        .then(function(response){
                            $scope.content = response.data;
                        })
                        .catch(function(error){
                            console.log(error);
                            $scope.content = [];
                        });

                    /*$scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'battlefield.page'
                    };*/

                    $scope.page_title = 'Er Meydanı';
                }]
            },
            children: {
                battlefield_page: {
                    name: 'battlefield.page',
                    url: '/:id',
                    params:{
                        id: null,
                        request: null
                    },
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', function ($scope) {
                                //Request.request($stateParams.request);
                                $scope.content = {
                                    author: 'Sait UYANIK',
                                    date: '11.02.1992',
                                    num_of_read:'12',
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain'
                                }
                            }]
                        }
                    }
                }
            }
        },
        itlaws: {
            main_route: {
                name: 'itlaws',
                url: '/itlaws',
                templateUrl: 'partials/route.itlaws.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    $scope.content = Plugin.getContent('ITLAWS')
                        .then(function(response){
                            $scope.content = response.data;
                        })
                        .catch(function(error){
                            console.log(error);
                            $scope.content = [];
                        });

                    /*$scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'itlaws.page'
                    };*/

                    $scope.page_title = 'Bilişim Hukuku';
                }]
            },
            children: {
                itlaws_page: {
                    name: 'itlaws.page',
                    url: '/:id',
                    params:{
                        id: null,
                        request: null
                    },
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', function ($scope) {
                                //Request.request($stateParams.request);
                                $scope.content = {
                                    author: 'Sait UYANIK',
                                    date: '11.02.1992',
                                    num_of_read:'12',
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain'
                                }
                            }]
                        }
                    }
                }
            }
        }
    };

    var education_plugin = {
        appsec: {
            main_route: {
                name: 'appsec',
                url: '/appsec',
                templateUrl: 'partials/route.appsec.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    $scope.content = Plugin.getContent('APPSEC')
                        .then(function(response){
                            $scope.content = response.data;
                        })
                        .catch(function(error){
                            console.log(error);
                            $scope.content = [];
                        });

                    //sunucudan aşağıdaki bilgiler gelecek
                    /*$scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'appsec.page',
                        request: {
                            method: 'GET',
                            url: '/appsec/24123'
                        }
                    };*/

                    $scope.page_title = 'Application Security';
                }]
            },
            children: {
                appsec_page: {
                    name: 'appsec.page',
                    url: '/:id',
                    params:{
                        id: null,
                        request: null
                    },
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', 'Request', '$stateParams', function ($scope, Request, $stateParams) {
                                //Request.request($stateParams.request);
                                $scope.content = {
                                    author: 'Sait UYANIK',
                                    date: '11.02.1992',
                                    num_of_read:'12',
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain',
                                    first_paragraph: 'İlk paragraf'
                                }
                            }]
                        }
                    }
                }
            }
        },
        netsec: {
            main_route: {
                name: 'netsec',
                url: '/netsec',
                templateUrl: 'partials/route.netsec.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    $scope.content = Plugin.getContent('APPSEC')
                        .then(function(response){
                            $scope.content = response.data;
                        })
                        .catch(function(error){
                            console.log(error);
                            $scope.content = [];
                        });

                    //sunucudan aşağıdaki bilgiler gelecek
                    /*$scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'netsec.page',
                        request: {
                            method: 'GET',
                            url: '/netsec/24123'
                        }
                    };*/

                    $scope.page_title = 'Network Security';
                }]
            },
            children: {
                netsec_page: {
                    name: 'netsec.page',
                    url: '/:id',
                    params:{
                        id: null,
                        request: null
                    },
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', 'Request', '$stateParams', function ($scope, Request, $stateParams) {
                                //Request.request($stateParams.request);
                                $scope.content = {
                                    author: 'Sait UYANIK',
                                    date: '11.02.1992',
                                    num_of_read:'12',
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain',
                                    first_paragraph: 'İlk paragraf'
                                }
                            }]
                        }
                    }
                }
            }
        },
        endsec: {
            main_route: {
                name: 'endsec',
                url: '/endsec',
                templateUrl: 'partials/route.endsec.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    $scope.content = Plugin.getContent('APPSEC')
                        .then(function(response){
                            $scope.content = response.data;
                        })
                        .catch(function(error){
                            console.log(error);
                            $scope.content = [];
                        });

                    //sunucudan aşağıdaki bilgiler gelecek
                    /*$scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'endsec.page',
                        request: {
                            method: 'GET',
                            url: '/endsec/24123'
                        }
                    };*/

                    $scope.page_title = 'Endpoint Security';
                }]
            },
            children: {
                endsec_page: {
                    name: 'endsec.page',
                    url: '/:id',
                    params:{
                        id: null,
                        request: null
                    },
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', 'Request', '$stateParams', function ($scope, Request, $stateParams) {
                                //Request.request($stateParams.request);
                                $scope.content = {
                                    author: 'Sait UYANIK',
                                    date: '11.02.1992',
                                    num_of_read:'12',
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain',
                                    first_paragraph: 'İlk paragraf'
                                }
                            }]
                        }
                    }
                }
            }
        }
    };

    var search = {
        name: 'search',
        url: '/search',
        templateUrl: 'partials/route.search.html',
        params:{
            input: ''
        },
        controller: ['$scope', '$stateParams', 'Search', function ($scope, $stateParams, Search) {
            $scope.input = $stateParams.input;
            Search.getResults($stateParams.input);
            $scope.results_demo = [
                {
                    body: 'Sonuç 1'
                },
                {
                    body: 'Sonuç 2'
                },
                {
                    body: 'Sonuç 3'
                }
            ];
        }]
    };

    //Merak edilen konular
    var medikon = {
        main_route: {
            name: 'medikon',
            url: '/medikon/:id',
            params:{
                id: null,
                request: null,
                title: null
            },
            templateUrl: 'partials/route.page.html',
            controller: ['$scope', 'Request', '$stateParams', function ($scope, Request, $stateParams) {

                Request.request($stateParams.request)
                    .then(function(response){
                        $scope.content.elements = response.data;
                    })
                    .catch(function(error){
                        console.log(error);
                    });

                $scope.content = {
                    title: $stateParams.title,
                    elements: [],
                    image: 'Resim',
                    body: 'İçerik içerik içerik'
                };
            }]
        }
    };

    // Güvenlik Önerileri
    var guvoner = {
        main_route: {
            name: 'guvoner',
            url: '/guvoner/:id',
            params:{
                id: null,
                request: null,
                title: null
            },
            templateUrl: 'partials/route.page.html',
            controller: ['$scope', 'Request', '$stateParams', function ($scope, Request, $stateParams) {
                Request.request($stateParams.request)
                    .then(function(response){
                        $scope.content.elements = response.data;
                    })
                    .catch(function(error){
                        console.log(error);
                    });

                $scope.content = {
                    title: $stateParams.title,
                    elements: [],
                    image: 'Resim',
                    body: 'İçerik içerik içerik'
                };
            }]
        }
    };

    //Saçma soapan meseleler
    var sacma = {
        main_route: {
            name: 'sacma',
            url: '/sacma/:id',
            params:{
                id: null,
                request: null,
                title: null
            },
            templateUrl: 'partials/route.page.html',
            controller: ['$scope', 'Request', '$stateParams', function ($scope, Request, $stateParams) {

                Request.request($stateParams.request)
                    .then(function(response){
                        $scope.content.elements = response.data;
                    })
                    .catch(function(error){
                        console.log(error);
                    });

                $scope.content = {
                    title: $stateParams.title,
                    elements: [],
                    image: 'Resim',
                    body: 'İçerik içerik içerik'
                };
            }]
        }
    };

    var admin_panel = {
        main_route: {
            name: 'admin',
            url: '/admin',
            template: '<ui-view/>'
        },
        admin_page: {
            name: 'admin.page',
            url: '/page',
            templateUrl: 'partials/route.adminpage.html',
            controller: 'AdminController'
        }
    };

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state(menu_plugin.home.main_route);

    //Menu plugins
    $stateProvider.state(menu_plugin.article.main_route);
    $stateProvider.state(menu_plugin.article.children.article_page);
    $stateProvider.state(menu_plugin.news.main_route);
    $stateProvider.state(menu_plugin.news.children.news_page);
    $stateProvider.state(menu_plugin.toolbag.main_route);
    $stateProvider.state(menu_plugin.toolbag.children.toolbag_page);
    $stateProvider.state(menu_plugin.battlefield.main_route);
    $stateProvider.state(menu_plugin.battlefield.children.battlefield_page);
    $stateProvider.state(menu_plugin.itlaws.main_route);
    $stateProvider.state(menu_plugin.itlaws.children.itlaws_page);

    //Arama yönlendiricisi
    $stateProvider.state(search);

    //Eğitim Yönlendiricisi
    $stateProvider.state(education_plugin.appsec.main_route);
    $stateProvider.state(education_plugin.appsec.children.appsec_page);
    $stateProvider.state(education_plugin.netsec.main_route);
    $stateProvider.state(education_plugin.netsec.children.netsec_page);
    $stateProvider.state(education_plugin.endsec.main_route);
    $stateProvider.state(education_plugin.endsec.children.endsec_page);

    //Merak edilen konular
    $stateProvider.state(medikon.main_route);

    //Güvenlik Önlemleri
    $stateProvider.state(guvoner.main_route);

    //Saçma Sapan Sorular
    $stateProvider.state(sacma.main_route);

    //Admin sayfası
    $stateProvider.state(admin_panel.main_route);
    $stateProvider.state(admin_panel.admin_page);

}]);