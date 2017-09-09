/**
 * Created by saidnuriPC on 9.09.2017.
 */
app.config(['$stateProvider', '$urlRouterProvider' ,function ($stateProvider, $urlRouterProvider) {

    var home = {
        name: 'home',
        url: '/home',
        templateUrl: 'partials/route.mainpage.html'
    };

    var article = {
        name: 'article',
        url: '/article',
        template: '<span>Yazılar</span></b>'
    };

    var news = {
        name: 'news',
        url: '/news',
        template: '<span>Haberler</span></b>'
    };

    $urlRouterProvider.otherwise('/home');
    $stateProvider.state(home);
    $stateProvider.state(article);
    $stateProvider.state(news);

}]);