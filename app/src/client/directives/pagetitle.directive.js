app.directive('pageTitle', function () {
    var directive = {};

    directive.restrict = 'E';
    directive.templateUrl = "partials/directive.pagetitle.html";
    directive.transclude = true;
    directive.replace = true;

    directive.scope = {
        title: "="
    };
    return directive;
});