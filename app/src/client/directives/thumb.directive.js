app.directive('thumb', function() {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "partials/directive.thumb.html";
    directive.replace = true;

    directive.scope = {
        attr: "="
    };

    return directive;
});