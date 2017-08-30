/*  */
app.directive('plugin', function() {
    //define the directive object
    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "partials/directive.plugin.html";
    directive.transclude = true;

    directive.scope = {
        options : "=type"
    };

    directive.link = function(scope, element, attributes) {
        var el_top = angular.element(element[0].getElementsByClassName( 'plugin_margin_top' ));
        var el_bot = angular.element(element[0].getElementsByClassName( 'plugin_margin_bottom'));

        el_top.css("margin-top", scope.options.margin_top);
        el_bot.css("margin-bottom", scope.options.margin_bottom);

    };

    return directive;
});