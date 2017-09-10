app.directive('comment', function() {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "partials/comment.html";

    directive.scope = {
        attr: "="
    };

    return directive;
});