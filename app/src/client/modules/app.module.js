var app = angular.module('myApp', ['ngMaterial', 'ui.router', 'angular-carousel', 'angular-sortable-view']);

app.config(["SliderProvider", "SearchProvider", "PluginProvider", function(SliderProvider, SearchProvider, PluginProvider) {
    SliderProvider.setSliderUrl('/sliderurl');
    SearchProvider.setSearchUrl('/search');
    PluginProvider.setRequestUrl('/plugin/home', 'HOME');
    PluginProvider.setRequestUrl('/plugin/news', 'NEWS');
    PluginProvider.setRequestUrl('/plugin/article', 'ARTICLE');
    PluginProvider.setRequestUrl('/plugin/toolbag', 'TOOLBAG');
    PluginProvider.setRequestUrl('/plugin/battfield', 'BATTLEFIELD');
    PluginProvider.setRequestUrl('/plugin/itlaws', 'ITLAWS');
    PluginProvider.setRequestUrl('/plugin/security/appsec', 'APPSEC');
    PluginProvider.setRequestUrl('/plugin/security/netsec', 'NETSEC');
    PluginProvider.setRequestUrl('/plugin/security/endsec', 'ENDSEC');
    PluginProvider.setRequestUrl('/plugin/medikon', 'MEDIKON');
    PluginProvider.setRequestUrl('/plugin/guvoner', 'GUVONER');
    PluginProvider.setRequestUrl('/plugin/sacma', 'SACMA');
    PluginProvider.setRequestUrl('/plugin/geoinfo', 'GEOINFO');

}]);

app.constant('Social', {
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    gplus: 'https://www.plus.google.com',
    youtube: 'https://www.youtube.com',
    linkedin: 'https://www.linkedin.com/',
    pinterest: 'https://www.pinterest.com',
    github: 'https://www.github.com/',
    dropbox: 'https://www.dropbox.com'
});

app.run(['$rootScope', function($rootScope) {

    $rootScope.$on('$stateChangeStart', function(evt, toState, toParams, fromState, fromParams) {
        console.log("$stateChangeStart " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
    });
    $rootScope.$on('$stateChangeSuccess', function() {
        console.log("$stateChangeSuccess " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
    });
    $rootScope.$on('$stateChangeError', function() {
        console.log("$stateChangeError " + fromState.name + JSON.stringify(fromParams) + " -> " + toState.name + JSON.stringify(toParams));
    });
}]);