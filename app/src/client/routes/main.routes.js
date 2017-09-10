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
        templateUrl: 'partials/route.articlepage.html',
        controller: ['$scope', function ($scope) {
            $scope.article_page = {
                page_title: 'Yazılar',
                title: 'Başlık2',
                image: 'Resim2',
                content: 'İçerik içerik içerik'
            }
        }]
    };

    var news = {
        name: 'news',
        url: '/news',
        templateUrl: 'partials/route.news_page.html',
        controller: ['$scope', function ($scope) {
            $scope.news_page = {
                page_title: 'Haberler',
                title: 'Başlık3',
                image: 'Resim3',
                content: 'İçerik içerik içerik'
            }
        }]
    };

    var newspage = {
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

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state(home);
    $stateProvider.state(article);
    $stateProvider.state(news);
    $stateProvider.state(newspage);

}]);