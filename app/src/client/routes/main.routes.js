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
                controller: ['$scope', function ($scope) {
                    $scope.main_page = {
                        page_title: 'Anasayfa',
                        title: 'Başlık',
                        image: 'Resim',
                        content: 'İçerik içerik içerik'
                    }
                }]
            },
            children: []
        },

        article: {
            main_route: {
                name: 'article',
                url: '/article',
                templateUrl: 'partials/route.article.html',
                controller: ['$scope', function ($scope) {
                    $scope.article_page = {
                        page_title: 'Yazılar',
                        title: 'Başlık2',
                        image: 'Resim2',
                        content: 'İçerik içerik içerik'
                    }
                }]
            },
            children: {
                article_page: {
                    name: 'article.page',
                    url: '/:id',
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', function ($scope) {

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
                controller: ['$scope', function ($scope) {
                    $scope.news_page = {
                        page_title: 'Haberler',
                        title: 'Başlık3',
                        image: 'Resim3',
                        content: 'İçerik içerik içerik'
                    }
                }]
            },
            children: {
                news_page: {
                    name: 'news.page',
                    url: '/:id',
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', '$stateParams', function ($scope, $stateParams) {
                                $scope.title = "Başlık " + $stateParams.id;
                                $scope.page_fab = {
                                    is_open: false,
                                    selectedDirection: 'right'
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
                controller: ['$scope', function ($scope) {

                }]
            },
            children: {
                tutorial_page: {
                    name: 'tutorial.page',
                    url: '/:id',
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', function ($scope) {

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
                controller: ['$scope', function ($scope) {

                }]
            },
            children: {
                toolbag_page : {
                    name: 'toolbag.page',
                    url: '/:id',
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', function ($scope) {

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
                controller: ['$scope', function ($scope) {

                }]
            },
            children: {
                battlefield_page: {
                    name: 'battlefield.page',
                    url: '/:id',
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', function ($scope) {

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
                controller: ['$scope', function ($scope) {

                }]
            },
            children: {
                itlaws_page: {
                    name: 'itlaws.page',
                    url: '/:id',
                    views: {
                        "@": { // Targets unnamed view of root template (index.html)
                            templateUrl: 'partials/route.page.html',
                            controller: ['$scope', function ($scope) {

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