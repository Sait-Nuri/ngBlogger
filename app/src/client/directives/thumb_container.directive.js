app.directive('thumbContainer', function() {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "partials/directive.thumb_container.html";
    directive.transclude = true;

    directive.scope = {

    };

    return directive;
});