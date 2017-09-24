/**
 * Created by saidnuriPC on 9.09.2017.
 */
app.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider) {
    var plugin = {
        home: {
            main_route: {
                name: 'home',
                url: '/home',
                templateUrl: 'partials/route.mainpage.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    //$scope.content = Plugin.getContent('HOME');
                    $scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik'
                    };

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
                    //$scope.content = Plugin.getContent('ARTICLE');
                    //sunucudan aşağıdaki bilgiler gelecek
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
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain'
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
                    //$scope.content = Plugin.getContent('NEWS');

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
                                    title: 'Facebook slapped with $1.43 million fine for violating users\' privacy in Spain'
                                }

                            }]
                        }
                    }
                }
            }
        },

        tutorial: {
            main_route: {
                name: 'tutorial',
                url: '/tutorial',
                templateUrl: 'partials/route.tutorial.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    //$scope.content = Plugin.getContent('TUTORIAL');

                    $scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'tutorial.page',
                        request: {
                            method: 'GET',
                            url: '/tutorial/24123'
                        }
                    };

                    $scope.page_title = 'Eğitimler';
                }]
            },
            children: {
                tutorial_page: {
                    name: 'tutorial.page',
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

        toolbag: {
            main_route: {
                name: 'toolbag',
                url: '/toolbag',
                templateUrl: 'partials/route.toolbag.html',
                controller: ['$scope', 'Plugin', function ($scope, Plugin) {
                    //$scope.content = Plugin.getContent('TOOLBAG');

                    $scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'toolbag.page'
                    };

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
                    //$scope.content = Plugin.getContent('BATTLEFIELD');

                    $scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'battlefield.page'
                    };

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
                    //$scope.content = Plugin.getContent('ITLAWS');

                    $scope.content = {
                        title: 'Başlık',
                        image: 'Resim',
                        body: 'İçerik içerik içerik',
                        id: '24123',
                        page_route: 'itlaws.page'
                    };

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

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state(plugin.home.main_route);

    $stateProvider.state(plugin.article.main_route);
    $stateProvider.state(plugin.article.children.article_page);

    $stateProvider.state(plugin.news.main_route);
    $stateProvider.state(plugin.news.children.news_page);

    $stateProvider.state(plugin.tutorial.main_route);
    $stateProvider.state(plugin.tutorial.children.tutorial_page);

    $stateProvider.state(plugin.toolbag.main_route);
    $stateProvider.state(plugin.toolbag.children.toolbag_page);

    $stateProvider.state(plugin.battlefield.main_route);
    $stateProvider.state(plugin.battlefield.children.battlefield_page);

    $stateProvider.state(plugin.itlaws.main_route);
    $stateProvider.state(plugin.itlaws.children.itlaws_page);

    $stateProvider.state(search);

}]);