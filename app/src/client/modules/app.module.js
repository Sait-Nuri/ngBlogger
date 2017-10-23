var app = angular.module('myApp', ['ngMaterial', 'ui.router', 'angular-carousel', 'angular-sortable-view']);

app.config(["SliderProvider", "SearchProvider", "PluginProvider", function(SliderProvider, SearchProvider, PluginProvider) {
    SliderProvider.setSliderUrl('/sliderurl');
    SearchProvider.setSearchUrl('/search');
    PluginProvider.setRequestUrl('/home', 'HOME');
    PluginProvider.setRequestUrl('/news', 'NEWS');
    PluginProvider.setRequestUrl('/article', 'ARTICLE');
    PluginProvider.setRequestUrl('/toolbag', 'TOOLBAG');
    PluginProvider.setRequestUrl('/battfield', 'BATTLEFIELD');
    PluginProvider.setRequestUrl('/itlaws', 'ITLAWS');
    PluginProvider.setRequestUrl('/appsec', 'APPSEC');
    PluginProvider.setRequestUrl('/netsec', 'NETSEC');
    PluginProvider.setRequestUrl('/endsec', 'ENDSEC');
    PluginProvider.setRequestUrl('/medikon', 'MEDIKON');
    PluginProvider.setRequestUrl('/guvoner', 'GUVONER');
    PluginProvider.setRequestUrl('/sacma', 'SACMA');
    PluginProvider.setRequestUrl('/geoinfo', 'GEOINFO');
    PluginProvider.setRequestUrl('/menulist', 'MENU_LIST');
    PluginProvider.setRequestUrl('/element_type', 'ELEMENT_TYPE');
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