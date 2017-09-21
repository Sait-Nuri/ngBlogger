/**
 * Created by saidnuriPC on 9.09.2017.
 */
app.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider) {

    var home = {
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
    };

    var article = {
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
    };

    var article_page = {
        name: 'article.page',
        url: '/:id',
        views: {
            "@": { // Targets unnamed view of root template (index.html)
                templateUrl: 'partials/route.page.html',
                controller: ['$scope', function ($scope) {

                }]
            }
        }
    };

    var news = {
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
    };

    var news_page = {
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
    };

    var tutorial = {
        name: 'tutorial',
        url: '/tutorial',
        templateUrl: 'partials/route.tutorial.html',
        controller: ['$scope', function ($scope) {

        }]
    };

    var tutorial_page = {
        name: 'tutorial.page',
        url: '/:id',
        views: {
            "@": { // Targets unnamed view of root template (index.html)
                templateUrl: 'partials/route.page.html',
                controller: ['$scope', function ($scope) {

                }]
            }
        }
    };

    var toolbag = {
        name: 'toolbag',
        url: '/toolbag',
        templateUrl: 'partials/route.toolbag.html',
        controller: ['$scope', function ($scope) {

        }]
    };

    var toolbag_page = {
        name: 'toolbag.page',
        url: '/:id',
        views: {
            "@": { // Targets unnamed view of root template (index.html)
                templateUrl: 'partials/route.page.html',
                controller: ['$scope', function ($scope) {

                }]
            }
        }
    };

    var battlefield = {
        name: 'battlefield',
        url: '/battlefield',
        templateUrl: 'partials/route.battlefield.html',
        controller: ['$scope', function ($scope) {

        }]
    };

    var battlefield_page = {
        name: 'battlefield.page',
        url: '/:id',
        views: {
            "@": { // Targets unnamed view of root template (index.html)
                templateUrl: 'partials/route.page.html',
                controller: ['$scope', function ($scope) {

                }]
            }
        }
    };

    var itlaws = {
        name: 'itlaws',
        url: '/itlaws',
        templateUrl: 'partials/route.itlaws.html',
        controller: ['$scope', function ($scope) {

        }]
    };

    var itlaws_page = {
        name: 'itlaws.page',
        url: '/:id',
        views: {
            "@": { // Targets unnamed view of root template (index.html)
                templateUrl: 'partials/route.page.html',
                controller: ['$scope', function ($scope) {

                }]
            }
        }
    };

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state(home);
    $stateProvider.state(article);
    $stateProvider.state(article_page);
    $stateProvider.state(news);
    $stateProvider.state(news_page);
    $stateProvider.state(tutorial);
    $stateProvider.state(tutorial_page);
    $stateProvider.state(toolbag);
    $stateProvider.state(toolbag_page);
    $stateProvider.state(battlefield);
    $stateProvider.state(battlefield_page);
    $stateProvider.state(itlaws);
    $stateProvider.state(itlaws_page);



}]);