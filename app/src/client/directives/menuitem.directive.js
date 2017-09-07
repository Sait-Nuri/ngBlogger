/*  */
app.directive( 'menuItem', function () {
    var dir ={};
    dir.restrict = 'E';
    dir.templateUrl = "partials/directive.menuitem.html";
    dir.transclude = true;

    dir.scope = {
        content : "="
    };

    return dir;
});