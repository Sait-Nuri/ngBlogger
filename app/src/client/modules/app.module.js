var app = angular.module('myApp', ['ngMaterial', 'ui.router', 'angular-carousel']);

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

}]);

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