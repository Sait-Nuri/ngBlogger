app.directive('comment', function() {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "partials/directive.comment.html";

    directive.scope = {
        attr: "="
    };

    return directive;
});