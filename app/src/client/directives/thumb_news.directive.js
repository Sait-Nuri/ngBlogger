app.directive('thumbNews', function() {

    var directive = {};
    directive.restrict = 'E';
    directive.templateUrl = "partials/directive.thumb_news.html";
    directive.replace = true;

    directive.scope = {
        attr: "="
    };

    return directive;
});